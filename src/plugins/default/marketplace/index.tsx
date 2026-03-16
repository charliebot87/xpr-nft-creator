import { useState, useEffect, useCallback } from 'react';
import { withUAL } from '@libs/ual-compat';
import { ipfsEndpoint } from '@configs/globalsConfig';

const API_BASE = 'https://xpr.api.atomicassets.io';
const INDEXER_BASE = 'https://indexer.protonnz.com';
const INDEXER_HEADERS = { 'User-Agent': 'xpr-nft-creator/1.0' };

async function getSimpleDexAccounts(): Promise<Set<string>> {
  try {
    const [tokensRes, lbRes] = await Promise.all([
      fetch(`${INDEXER_BASE}/api/tokens?fields=compact&limit=500`, { headers: INDEXER_HEADERS }),
      fetch(`${INDEXER_BASE}/api/leaderboard?limit=100`, { headers: INDEXER_HEADERS }),
    ]);
    const tokensJson = await tokensRes.json();
    const lbJson = await lbRes.json();
    const creators = (tokensJson.tokens || []).map((t: any) => t.creator);
    const topCreators = (lbJson.topCreators || []).map((t: any) => t.account);
    const topTraders = (lbJson.topTraders || []).map((t: any) => t.account);
    return new Set([...creators, ...topCreators, ...topTraders]);
  } catch {
    return new Set();
  }
}

async function getSimpleDexCollections(): Promise<Set<string>> {
  const accounts = await getSimpleDexAccounts();
  try {
    const res = await fetch(`${API_BASE}/atomicassets/v1/collections?limit=500&order=desc&sort=created`);
    const json = await res.json();
    const collections = (json.data || [])
      .filter((c: any) => accounts.has(c.author))
      .map((c: any) => c.collection_name);
    return new Set(collections);
  } catch {
    return new Set();
  }
}

type SaleData = {
  sale_id: string;
  seller: string;
  buyer: string;
  listing_price: string;
  listing_symbol: string;
  collection_name: string;
  created_at_time: string;
  updated_at_time: string;
  state: number;
  price: {
    token_contract: string;
    token_symbol: string;
    token_precision: number;
    amount: number;
  };
  assets: {
    asset_id: string;
    name: string;
    data: Record<string, any>;
    template: {
      template_id: string;
      immutable_data: Record<string, any>;
    };
    collection: {
      collection_name: string;
      name: string;
    };
  }[];
};

type OwnedAsset = {
  asset_id: string;
  name: string;
  data: Record<string, any>;
  template: {
    template_id: string;
    immutable_data: Record<string, any>;
  };
  collection: {
    collection_name: string;
    name: string;
  };
};

function getIpfsImage(data: Record<string, any>): string {
  const hash = data?.img || data?.image || data?.video || '';
  if (!hash) return '';
  if (hash.startsWith('http')) return hash;
  if (hash.startsWith('Qm') || hash.startsWith('bafy')) {
    return `${ipfsEndpoint}/${hash}`;
  }
  return `${ipfsEndpoint}/${hash}`;
}

function formatPrice(amount: string | number, symbol = 'XPR'): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return `0.0000 ${symbol}`;
  const parts = num.toFixed(4).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${parts.join('.')} ${symbol}`;
}

function parsePriceFromListing(listing_price: string, precision = 4): number {
  const raw = parseInt(listing_price, 10);
  if (isNaN(raw)) return 0;
  return raw / Math.pow(10, precision);
}

function rawPriceToAsset(
  rawPrice: string,
  symbol: string,
  precision: number
): string {
  const amount = parseInt(rawPrice, 10);
  const divisor = Math.pow(10, precision);
  return (amount / divisor).toFixed(precision) + ' ' + symbol;
}

type Tab = 'browse' | 'my-listings' | 'history';
type SortOption = 'newest' | 'price-asc' | 'price-desc';
type ListingStep = 'select' | 'price' | 'preview' | 'success';

interface MarketplaceProps {
  ual: any;
}

function Marketplace({ ual }: MarketplaceProps) {
  const accountName = ual?.activeUser?.accountName || '';

  const [tab, setTab] = useState<Tab>('browse');
  const [sales, setSales] = useState<SaleData[]>([]);
  const [mySales, setMySales] = useState<SaleData[]>([]);
  const [history, setHistory] = useState<SaleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Browse filters
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [collectionFilter, setCollectionFilter] = useState('');
  const [collections, setCollections] = useState<string[]>([]);

  // Buy modal
  const [buyModal, setBuyModal] = useState<SaleData | null>(null);
  const [txLoading, setTxLoading] = useState(false);
  const [txResult, setTxResult] = useState<{
    success: boolean;
    txId?: string;
    error?: string;
  } | null>(null);

  // Listing flow
  const [showListingFlow, setShowListingFlow] = useState(false);
  const [listingStep, setListingStep] = useState<ListingStep>('select');
  const [ownedAssets, setOwnedAssets] = useState<OwnedAsset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<OwnedAsset | null>(null);
  const [listingPrice, setListingPrice] = useState('');
  const [listingError, setListingError] = useState('');
  const [sdxCollections, setSdxCollections] = useState<Set<string>>(new Set());

  useEffect(() => {
    getSimpleDexCollections().then(setSdxCollections);
  }, []);
  const [listingTxId, setListingTxId] = useState('');
  const [loadingAssets, setLoadingAssets] = useState(false);

  // Cancel
  const [cancelLoading, setCancelLoading] = useState<string | null>(null);

  const signTransaction = useCallback(
    async (actions: any[]) => {
      if (!ual?.activeUser) throw new Error('Not logged in');
      const result = await ual.activeUser.signTransaction(
        { actions },
        { broadcast: true, blocksBehind: 3, expireSeconds: 120 }
      );
      return result;
    },
    [ual]
  );

  const fetchSales = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      let sort = 'created';
      let order = 'desc';
      if (sortBy === 'price-asc') {
        sort = 'price';
        order = 'asc';
      } else if (sortBy === 'price-desc') {
        sort = 'price';
        order = 'desc';
      }

      let url = `${API_BASE}/atomicmarket/v1/sales?state=1&order=${order}&sort=${sort}&limit=50`;
      if (collectionFilter) {
        url += `&collection_name=${collectionFilter}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        const allSales = json.data || [];
        const filtered = sdxCollections.size > 0
          ? allSales.filter((s: SaleData) => sdxCollections.has(s.collection_name))
          : allSales;
        setSales(filtered);
        // Extract unique collections from filtered sales
        const cols = new Set<string>();
        filtered.forEach((s: SaleData) => {
          if (s.collection_name) cols.add(s.collection_name);
        });
        if (!collectionFilter) {
          setCollections((prev) => {
            const merged = new Set([...prev, ...cols]);
            return Array.from(merged).sort();
          });
        }
      } else {
        setError('Failed to load sales');
      }
    } catch (e: any) {
      setError(e.message || 'Failed to fetch sales');
    } finally {
      setLoading(false);
    }
  }, [sortBy, collectionFilter, sdxCollections]);

  const fetchMySales = useCallback(async () => {
    if (!accountName) return;
    setLoading(true);
    setError('');
    try {
      const url = `${API_BASE}/atomicmarket/v1/sales?state=1&seller=${accountName}&limit=50`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        setMySales(json.data || []);
      }
    } catch (e: any) {
      setError(e.message || 'Failed to fetch your listings');
    } finally {
      setLoading(false);
    }
  }, [accountName]);

  const fetchHistory = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const url = `${API_BASE}/atomicmarket/v1/sales?state=3&sort=updated&order=desc&limit=20`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        const allHistory = json.data || [];
        const filteredHistory = sdxCollections.size > 0
          ? allHistory.filter((s: SaleData) => sdxCollections.has(s.collection_name))
          : allHistory;
        setHistory(filteredHistory);
      }
    } catch (e: any) {
      setError(e.message || 'Failed to fetch sales history');
    } finally {
      setLoading(false);
    }
  }, [sdxCollections]);

  const fetchOwnedAssets = useCallback(async () => {
    if (!accountName) return;
    setLoadingAssets(true);
    try {
      const url = `${API_BASE}/atomicassets/v1/assets?owner=${accountName}&limit=100&order=desc&sort=asset_id`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.success) {
        setOwnedAssets(json.data || []);
      }
    } catch {
      // silently fail
    } finally {
      setLoadingAssets(false);
    }
  }, [accountName]);

  useEffect(() => {
    if (tab === 'browse') fetchSales();
    else if (tab === 'my-listings') fetchMySales();
    else if (tab === 'history') fetchHistory();
  }, [tab, fetchSales, fetchMySales, fetchHistory, sdxCollections]);

  // Populate collection filter dropdown from SimpleDEX-filtered sales
  useEffect(() => {
    if (sdxCollections.size === 0) return;
    (async () => {
      try {
        const url = `${API_BASE}/atomicmarket/v1/sales?state=1&order=desc&sort=created&limit=100`;
        const res = await fetch(url);
        const json = await res.json();
        if (json.success) {
          const cols = new Set<string>();
          (json.data || []).forEach((s: SaleData) => {
            if (s.collection_name && sdxCollections.has(s.collection_name)) {
              cols.add(s.collection_name);
            }
          });
          setCollections(Array.from(cols).sort());
        }
      } catch {
        // ignore
      }
    })();
  }, [sdxCollections]);

  const handleBuy = async (sale: SaleData) => {
    if (!accountName) {
      ual?.showModal?.();
      return;
    }
    setTxLoading(true);
    setTxResult(null);
    try {
      const actions = [
        {
          account: 'eosio.token',
          name: 'transfer',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            from: accountName,
            to: 'atomicmarket',
            quantity: rawPriceToAsset(
              sale.listing_price,
              sale.listing_symbol || 'XPR',
              sale.price?.token_precision || 4
            ),
            memo: 'deposit',
          },
        },
        {
          account: 'atomicmarket',
          name: 'purchasesale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            sale_id: parseInt(sale.sale_id, 10),
            buyer: accountName,
            intended_delphi_median: 0,
            taker_marketplace: 'charliebot',
          },
        },
      ];
      const result = await signTransaction(actions);
      const txId =
        result?.transactionId ||
        result?.transaction?.transaction_id ||
        result?.processed?.id ||
        '';
      setTxResult({ success: true, txId });
      // Refresh sales after buy
      setTimeout(() => fetchSales(), 2000);
    } catch (e: any) {
      setTxResult({
        success: false,
        error: e.message || 'Transaction failed',
      });
    } finally {
      setTxLoading(false);
    }
  };

  const handleCancel = async (saleId: string) => {
    if (!accountName) return;
    setCancelLoading(saleId);
    try {
      const actions = [
        {
          account: 'atomicmarket',
          name: 'cancelsale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            sale_id: parseInt(saleId, 10),
          },
        },
      ];
      await signTransaction(actions);
      // Refresh my sales
      setTimeout(() => fetchMySales(), 2000);
    } catch (e: any) {
      alert(`Cancel failed: ${e.message || 'Unknown error'}`);
    } finally {
      setCancelLoading(null);
    }
  };

  const handleListNFT = async () => {
    if (!accountName || !selectedAsset || !listingPrice) return;
    setListingError('');
    setTxLoading(true);
    try {
      const priceNum = parseFloat(listingPrice);
      if (isNaN(priceNum) || priceNum < 0.0001) {
        setListingError('Price must be at least 0.0001 XPR');
        setTxLoading(false);
        return;
      }
      const formattedPrice = `${priceNum.toFixed(4)} XPR`;
      const actions = [
        {
          account: 'atomicmarket',
          name: 'announcesale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            seller: accountName,
            asset_ids: [parseInt(selectedAsset.asset_id, 10)],
            listing_price: formattedPrice,
            settlement_symbol: '4,XPR',
            maker_marketplace: 'charliebot',
          },
        },
        {
          account: 'atomicassets',
          name: 'createoffer',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            sender: accountName,
            recipient: 'atomicmarket',
            sender_asset_ids: [parseInt(selectedAsset.asset_id, 10)],
            recipient_asset_ids: [],
            memo: 'sale',
          },
        },
      ];
      const result = await signTransaction(actions);
      const txId =
        result?.transactionId ||
        result?.transaction?.transaction_id ||
        result?.processed?.id ||
        '';
      setListingTxId(txId);
      setListingStep('success');
    } catch (e: any) {
      setListingError(e.message || 'Failed to list NFT');
    } finally {
      setTxLoading(false);
    }
  };

  const openListingFlow = () => {
    setShowListingFlow(true);
    setListingStep('select');
    setSelectedAsset(null);
    setListingPrice('');
    setListingError('');
    setListingTxId('');
    fetchOwnedAssets();
  };

  const closeListingFlow = () => {
    setShowListingFlow(false);
    setSelectedAsset(null);
    setListingPrice('');
    setListingError('');
    if (listingStep === 'success') {
      fetchMySales();
    }
  };

  const getAssetImage = (asset: SaleData['assets'][0] | OwnedAsset): string => {
    const immData = asset?.template?.immutable_data || asset?.data || {};
    return getIpfsImage(immData);
  };

  const getAssetName = (asset: SaleData['assets'][0] | OwnedAsset): string => {
    return (
      asset?.name ||
      asset?.data?.name ||
      asset?.template?.immutable_data?.name ||
      `#${asset?.asset_id}`
    );
  };

  const renderSaleCard = (sale: SaleData, showBuy = true) => {
    const asset = sale.assets?.[0];
    if (!asset) return null;
    const imgUrl = getAssetImage(asset);
    const name = getAssetName(asset);
    const price = sale.listing_price;
    const isSeller = sale.seller === accountName;

    return (
      <div
        key={sale.sale_id}
        className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 flex flex-col"
      >
        <div className="aspect-square bg-neutral-800 relative overflow-hidden">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-600 text-sm">
              No Image
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-white font-semibold text-sm truncate">{name}</h3>
          <p className="text-neutral-500 text-xs truncate">
            {sale.collection_name}
          </p>
          <p className="text-[#00ff88] font-bold text-lg mt-auto">
            {formatPrice(
              parsePriceFromListing(price, sale.price?.token_precision || 4),
              sale.listing_symbol || 'XPR'
            )}
          </p>
          <p className="text-neutral-500 text-xs truncate">
            Seller: {sale.seller}
          </p>
          {showBuy && (
            <button
              onClick={() => {
                if (isSeller) return;
                setBuyModal(sale);
                setTxResult(null);
              }}
              disabled={isSeller}
              className={`mt-2 w-full py-2 rounded-lg font-semibold text-sm transition-all ${
                isSeller
                  ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                  : 'bg-[#00ff88] text-neutral-900 hover:bg-[#00cc6a] cursor-pointer'
              }`}
            >
              {isSeller ? 'Your Listing' : 'Buy Now'}
            </button>
          )}
        </div>
      </div>
    );
  };

  const tabClasses = (t: Tab) =>
    `px-6 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
      tab === t
        ? 'bg-[#00ff88] text-neutral-900'
        : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
    }`;

  return (
    <div className="min-h-screen bg-neutral-900 pb-16">
      <div className="container mx-auto px-4 pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            NFT Marketplace
          </h1>
          <p className="text-neutral-400">Buy and sell NFTs on XPR Network</p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-3 mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <button
            className={tabClasses('browse')}
            onClick={() => setTab('browse')}
          >
            Browse
          </button>
          <button
            className={tabClasses('my-listings')}
            onClick={() => {
              if (!accountName) {
                ual?.showModal?.();
                return;
              }
              setTab('my-listings');
            }}
          >
            My Listings
          </button>
          <button
            className={tabClasses('history')}
            onClick={() => setTab('history')}
          >
            Sales History
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {/* Browse Tab */}
        {tab === 'browse' && (
          <div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:items-center">
              <select
                value={collectionFilter}
                onChange={(e) => setCollectionFilter(e.target.value)}
                className="bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:border-[#00ff88] focus:outline-none"
              >
                <option value="">All Collections</option>
                {collections.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:border-[#00ff88] focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
              <button
                onClick={fetchSales}
                className="bg-neutral-800 text-neutral-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-all cursor-pointer"
              >
                Refresh
              </button>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent" />
              </div>
            ) : sales.length === 0 ? (
              <div className="text-center py-20 text-neutral-500">
                <p className="text-lg mb-2">No listings yet</p>
                <p className="text-sm">Be the first to list an NFT for sale!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sales.map((sale) => renderSaleCard(sale))}
              </div>
            )}
          </div>
        )}

        {/* My Listings Tab */}
        {tab === 'my-listings' && (
          <div>
            {!accountName ? (
              <div className="text-center py-20 text-neutral-500">
                <p className="text-lg mb-4">
                  Connect your wallet to view listings
                </p>
                <button
                  onClick={() => ual?.showModal?.()}
                  className="bg-[#00ff88] text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#00cc6a] transition-all cursor-pointer"
                >
                  Connect Wallet
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <button
                    onClick={openListingFlow}
                    className="bg-[#9966ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7b4fe0] transition-all cursor-pointer"
                  >
                    + List an NFT for Sale
                  </button>
                </div>
                {loading ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent" />
                  </div>
                ) : mySales.length === 0 ? (
                  <div className="text-center py-20 text-neutral-500">
                    <p className="text-lg">
                      You don&apos;t have any active listings
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mySales.map((sale) => {
                      const asset = sale.assets?.[0];
                      if (!asset) return null;
                      const imgUrl = getAssetImage(asset);
                      const name = getAssetName(asset);
                      return (
                        <div
                          key={sale.sale_id}
                          className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 flex flex-col"
                        >
                          <div className="aspect-square bg-neutral-800 relative overflow-hidden">
                            {imgUrl ? (
                              <img
                                src={imgUrl}
                                alt={name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-neutral-600 text-sm">
                                No Image
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col gap-2 flex-1">
                            <h3 className="text-white font-semibold text-sm truncate">
                              {name}
                            </h3>
                            <p className="text-neutral-500 text-xs truncate">
                              {sale.collection_name}
                            </p>
                            <p className="text-[#00ff88] font-bold text-lg mt-auto">
                              {formatPrice(
                                parsePriceFromListing(
                                  sale.listing_price,
                                  sale.price?.token_precision || 4
                                ),
                                sale.listing_symbol || 'XPR'
                              )}
                            </p>
                            <button
                              onClick={() => handleCancel(sale.sale_id)}
                              disabled={cancelLoading === sale.sale_id}
                              className="mt-2 w-full py-2 rounded-lg font-semibold text-sm bg-red-600 text-white hover:bg-red-700 transition-all cursor-pointer disabled:opacity-50"
                            >
                              {cancelLoading === sale.sale_id
                                ? 'Cancelling...'
                                : 'Cancel Listing'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Sales History Tab */}
        {tab === 'history' && (
          <div>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent" />
              </div>
            ) : history.length === 0 ? (
              <div className="text-center py-20 text-neutral-500">
                <p className="text-lg">No completed sales yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-neutral-500 border-b border-neutral-800">
                      <th className="text-left py-3 px-4">NFT</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Seller</th>
                      <th className="text-left py-3 px-4">Buyer</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((sale) => {
                      const asset = sale.assets?.[0];
                      const name = asset ? getAssetName(asset) : 'Unknown';
                      const imgUrl = asset ? getAssetImage(asset) : '';
                      const date = new Date(parseInt(sale.updated_at_time, 10));
                      return (
                        <tr
                          key={sale.sale_id}
                          className="border-b border-neutral-800/50 hover:bg-neutral-800/30"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              {imgUrl && (
                                <img
                                  src={imgUrl}
                                  alt={name}
                                  className="w-10 h-10 rounded object-cover"
                                  loading="lazy"
                                />
                              )}
                              <div>
                                <p className="text-white font-medium truncate max-w-[150px]">
                                  {name}
                                </p>
                                <p className="text-neutral-500 text-xs">
                                  {sale.collection_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-[#00ff88] font-semibold">
                            {formatPrice(
                              parsePriceFromListing(
                                sale.listing_price,
                                sale.price?.token_precision || 4
                              ),
                              sale.listing_symbol || 'XPR'
                            )}
                          </td>
                          <td className="py-3 px-4 text-neutral-400">
                            {sale.seller}
                          </td>
                          <td className="py-3 px-4 text-neutral-400">
                            {sale.buyer || '—'}
                          </td>
                          <td className="py-3 px-4 text-neutral-500">
                            {date.toLocaleDateString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Buy Confirmation Modal */}
      {buyModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6 pb-10 max-h-[90vh] overflow-y-auto">
            {txResult?.success ? (
              <div className="text-center">
                <div className="text-[#00ff88] text-5xl mb-4">✓</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Purchase Successful!
                </h3>
                {txResult.txId && (
                  <a
                    href={`https://explorer.xprnetwork.org/transaction/${txResult.txId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9966ff] underline text-sm"
                  >
                    View Transaction
                  </a>
                )}
                <button
                  onClick={() => {
                    setBuyModal(null);
                    setTxResult(null);
                  }}
                  className="mt-6 w-full py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white text-xl font-bold mb-4">
                  Confirm Purchase
                </h3>
                {buyModal.assets?.[0] && (
                  <div className="flex items-center gap-4 mb-4">
                    {getAssetImage(buyModal.assets[0]) && (
                      <img
                        src={getAssetImage(buyModal.assets[0])}
                        alt=""
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <p className="text-white font-semibold">
                        {getAssetName(buyModal.assets[0])}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {buyModal.collection_name}
                      </p>
                    </div>
                  </div>
                )}
                <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                  <p className="text-neutral-400 text-sm mb-1">Total Price</p>
                  <p className="text-[#00ff88] text-2xl font-bold">
                    {formatPrice(
                      parsePriceFromListing(
                        buyModal.listing_price,
                        buyModal.price?.token_precision || 4
                      ),
                      buyModal.listing_symbol || 'XPR'
                    )}
                  </p>
                </div>
                <p className="text-neutral-500 text-sm mb-4">
                  Seller: {buyModal.seller}
                </p>
                {txResult?.error && (
                  <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                    {txResult.error}
                  </div>
                )}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setBuyModal(null);
                      setTxResult(null);
                    }}
                    className="flex-1 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleBuy(buyModal)}
                    disabled={txLoading}
                    className="flex-1 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {txLoading ? 'Processing...' : 'Confirm Buy'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Listing Flow Modal */}
      {showListingFlow && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl p-6 pb-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">
                {listingStep === 'select' && 'Select an NFT to List'}
                {listingStep === 'price' && 'Set Your Price'}
                {listingStep === 'preview' && 'Preview Listing'}
                {listingStep === 'success' && 'Listed Successfully!'}
              </h3>
              <button
                onClick={closeListingFlow}
                className="text-neutral-500 hover:text-white text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Step: Select NFT */}
            {listingStep === 'select' && (
              <div>
                {loadingAssets ? (
                  <div className="flex items-center justify-center py-16">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#00ff88] border-t-transparent" />
                  </div>
                ) : ownedAssets.length === 0 ? (
                  <p className="text-neutral-500 text-center py-16">
                    You don&apos;t own any NFTs to list
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto">
                    {ownedAssets.map((asset) => {
                      const imgUrl = getAssetImage(asset);
                      const name = getAssetName(asset);
                      const isSelected =
                        selectedAsset?.asset_id === asset.asset_id;
                      return (
                        <div
                          key={asset.asset_id}
                          onClick={() => setSelectedAsset(asset)}
                          className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                              : 'border-neutral-800 hover:border-neutral-600'
                          }`}
                        >
                          <div className="aspect-square bg-neutral-800 overflow-hidden">
                            {imgUrl ? (
                              <img
                                src={imgUrl}
                                alt={name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs">
                                No Img
                              </div>
                            )}
                          </div>
                          <div className="p-2">
                            <p className="text-white text-xs font-medium truncate">
                              {name}
                            </p>
                            <p className="text-neutral-500 text-[10px] truncate">
                              {asset.collection?.collection_name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => {
                      if (selectedAsset) setListingStep('price');
                    }}
                    disabled={!selectedAsset}
                    className="px-6 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all disabled:opacity-30 cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step: Set Price */}
            {listingStep === 'price' && (
              <div>
                <div className="mb-6">
                  <label className="block text-neutral-400 text-sm mb-2">
                    Price in XPR
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    min="0.0001"
                    value={listingPrice}
                    onChange={(e) => {
                      setListingPrice(e.target.value);
                      setListingError('');
                    }}
                    placeholder="0.0000"
                    className="w-full bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-3 text-lg focus:border-[#00ff88] focus:outline-none"
                  />
                  {listingPrice && parseFloat(listingPrice) > 0 && (
                    <p className="text-neutral-500 text-sm mt-2">
                      Listing for:{' '}
                      <span className="text-[#00ff88]">
                        {formatPrice(parseFloat(listingPrice))}
                      </span>
                    </p>
                  )}
                  {listingError && (
                    <p className="text-red-400 text-sm mt-2">{listingError}</p>
                  )}
                </div>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setListingStep('select')}
                    className="px-6 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      const p = parseFloat(listingPrice);
                      if (isNaN(p) || p < 0.0001) {
                        setListingError('Price must be a number >= 0.0001 XPR');
                        return;
                      }
                      setListingStep('preview');
                    }}
                    className="px-6 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-semibold hover:bg-[#00cc6a] transition-all cursor-pointer"
                  >
                    Preview
                  </button>
                </div>
              </div>
            )}

            {/* Step: Preview */}
            {listingStep === 'preview' && selectedAsset && (
              <div>
                <div className="flex items-center gap-6 mb-6">
                  {getAssetImage(selectedAsset) && (
                    <img
                      src={getAssetImage(selectedAsset)}
                      alt=""
                      className="w-32 h-32 rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <p className="text-white text-lg font-bold">
                      {getAssetName(selectedAsset)}
                    </p>
                    <p className="text-neutral-500 text-sm">
                      {selectedAsset.collection?.collection_name}
                    </p>
                    <p className="text-[#00ff88] text-2xl font-bold mt-2">
                      {formatPrice(parseFloat(listingPrice))}
                    </p>
                  </div>
                </div>
                {listingError && (
                  <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                    {listingError}
                  </div>
                )}
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setListingStep('price')}
                    className="px-6 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleListNFT}
                    disabled={txLoading}
                    className="px-6 py-3 rounded-lg bg-[#9966ff] text-white font-semibold hover:bg-[#7b4fe0] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {txLoading ? 'Processing...' : 'Confirm & List'}
                  </button>
                </div>
              </div>
            )}

            {/* Step: Success */}
            {listingStep === 'success' && (
              <div className="text-center py-8">
                <div className="text-[#00ff88] text-5xl mb-4">✓</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  NFT Listed for Sale!
                </h3>
                {listingTxId && (
                  <a
                    href={`https://explorer.xprnetwork.org/transaction/${listingTxId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9966ff] underline text-sm"
                  >
                    View Transaction
                  </a>
                )}
                <button
                  onClick={closeListingFlow}
                  className="mt-6 w-full py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default withUAL(Marketplace);
