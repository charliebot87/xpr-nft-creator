import { useState, useEffect, useCallback, useMemo } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { withUAL } from '@libs/ual-compat';
import { appName, ipfsEndpoint } from '@configs/globalsConfig';
import * as chainsConfig from '@configs/chainsConfig';

const API_BASE = 'https://xpr.api.atomicassets.io';

interface AssetData {
  asset_id: string;
  collection: { collection_name: string; name: string };
  template: {
    template_id: string;
    immutable_data: Record<string, any>;
  } | null;
  template_mint: string;
  name: string;
  data: Record<string, any>;
}

interface SaleInfo {
  sale_id: string;
  listing_price: string;
  listing_symbol: string;
  price: { token_precision: number; amount: string; token_symbol: string };
}

function getIpfsImage(data: Record<string, any>): string {
  const hash = data?.img || data?.image || data?.video || '';
  if (!hash) return '';
  if (hash.startsWith('http')) return hash;
  return `${ipfsEndpoint}/${hash}`;
}

// --- Modals ---

function ListForSaleModal({
  asset,
  onClose,
  onConfirm,
}: {
  asset: AssetData;
  onClose: () => void;
  onConfirm: (price: number) => void;
}) {
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const name =
    asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;

  const handleConfirm = () => {
    const p = parseFloat(price);
    if (isNaN(p) || p <= 0) {
      setError('Enter a valid price greater than 0');
      return;
    }
    onConfirm(p);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl w-full max-w-md p-6">
        <h3 className="text-xl font-bold text-white mb-1">List for Sale</h3>
        <p className="text-neutral-400 text-sm mb-4">{name}</p>
        <label className="block text-sm text-neutral-300 mb-1">
          Price (XPR)
        </label>
        <input
          type="number"
          step="0.0001"
          min="0"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            setError('');
          }}
          placeholder="0.0000"
          className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none mb-1"
        />
        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}
        {price && parseFloat(price) > 0 && (
          <p className="text-neon text-sm mb-4">
            Listing at {parseFloat(price).toFixed(4)} XPR
          </p>
        )}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 rounded-lg bg-neon/20 border border-neon text-neon font-semibold hover:bg-neon/30"
          >
            Confirm Listing
          </button>
        </div>
      </div>
    </div>
  );
}

function TransferModal({
  asset,
  onClose,
  onConfirm,
}: {
  asset: AssetData;
  onClose: () => void;
  onConfirm: (recipient: string, memo: string) => void;
}) {
  const [recipient, setRecipient] = useState('');
  const [memo, setMemo] = useState('');
  const [error, setError] = useState('');
  const name =
    asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;

  const handleConfirm = () => {
    if (!recipient.trim()) {
      setError('Enter a recipient account');
      return;
    }
    onConfirm(recipient.trim(), memo.trim());
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl w-full max-w-md p-6">
        <h3 className="text-xl font-bold text-white mb-1">Transfer NFT</h3>
        <p className="text-neutral-400 text-sm mb-4">{name}</p>
        <label className="block text-sm text-neutral-300 mb-1">
          Recipient Account
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => {
            setRecipient(e.target.value);
            setError('');
          }}
          placeholder="accountname"
          className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none mb-3"
        />
        <label className="block text-sm text-neutral-300 mb-1">
          Memo (optional)
        </label>
        <input
          type="text"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="Optional memo"
          className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none"
        />
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500 text-purple-300 font-semibold hover:bg-purple-600/30"
          >
            Confirm Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

function BurnModal({
  asset,
  onClose,
  onConfirm,
}: {
  asset: AssetData;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [typed, setTyped] = useState('');
  const name =
    asset.template?.immutable_data?.name || asset.name || `#${asset.asset_id}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="bg-neutral-900 border border-red-500/50 rounded-xl w-full max-w-md p-6">
        <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Burn NFT</h3>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
          <p className="text-red-300 font-semibold text-sm">
            This is permanent and cannot be undone.
          </p>
          <p className="text-red-400/80 text-xs mt-1">
            The NFT will be destroyed forever. There is no way to recover it.
          </p>
        </div>
        <p className="text-neutral-300 text-sm mb-2">
          Type <span className="text-white font-mono">{name}</span> to confirm:
        </p>
        <input
          type="text"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder={name}
          className="w-full bg-neutral-800 border border-red-500/30 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
        />
        <div className="flex gap-3 mt-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-neutral-600 text-neutral-300 hover:bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={typed !== name}
            className="flex-1 px-4 py-2 rounded-lg bg-red-900/20 border border-red-500 text-red-400 font-semibold hover:bg-red-900/40 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Burn Forever
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main Page ---

interface MyNFTsProps {
  chainKey: string;
  ual?: any;
}

function MyNFTs({ chainKey, ual }: MyNFTsProps) {
  const accountName = ual?.activeUser?.accountName;

  const [assets, setAssets] = useState<AssetData[]>([]);
  const [sales, setSales] = useState<Record<string, SaleInfo>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterCollection, setFilterCollection] = useState('all');

  // Modal state
  const [listModal, setListModal] = useState<AssetData | null>(null);
  const [transferModal, setTransferModal] = useState<AssetData | null>(null);
  const [burnModal, setBurnModal] = useState<AssetData | null>(null);
  const [txPending, setTxPending] = useState(false);
  const [txResult, setTxResult] = useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  const signTransaction = useCallback(
    async (actions: any[]) => {
      return ual.activeUser.signTransaction(
        { actions },
        { broadcast: true, blocksBehind: 3, expireSeconds: 120 }
      );
    },
    [ual]
  );

  // Fetch assets
  const fetchAssets = useCallback(async () => {
    if (!accountName) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `${API_BASE}/atomicassets/v1/assets?owner=${accountName}&limit=100&order=desc&sort=asset_id`
      );
      const json = await res.json();
      if (!json.success) throw new Error('Failed to fetch assets');
      setAssets(json.data || []);

      // Fetch sales in parallel
      const salesMap: Record<string, SaleInfo> = {};
      const assetIds = (json.data || []).map((a: AssetData) => a.asset_id);
      if (assetIds.length > 0) {
        // Batch check — up to 100 at a time using comma-separated IDs
        const salesRes = await fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=1&seller=${accountName}&limit=100&order=desc&sort=created`
        );
        const salesJson = await salesRes.json();
        if (salesJson.success && salesJson.data) {
          for (const sale of salesJson.data) {
            for (const saleAsset of sale.assets || []) {
              salesMap[saleAsset.asset_id] = {
                sale_id: sale.sale_id,
                listing_price: sale.listing_price,
                listing_symbol: sale.listing_symbol,
                price: sale.price,
              };
            }
          }
        }
      }
      setSales(salesMap);
    } catch (e: any) {
      setError(e.message || 'Failed to load NFTs');
    } finally {
      setLoading(false);
    }
  }, [accountName]);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets]);

  // Collections for filter
  const collections = useMemo(() => {
    const set = new Map<string, string>();
    for (const a of assets) {
      set.set(
        a.collection.collection_name,
        a.collection.name || a.collection.collection_name
      );
    }
    return Array.from(set.entries());
  }, [assets]);

  const filteredAssets = useMemo(() => {
    if (filterCollection === 'all') return assets;
    return assets.filter(
      (a) => a.collection.collection_name === filterCollection
    );
  }, [assets, filterCollection]);

  // --- Transaction handlers ---

  const handleListForSale = async (price: number) => {
    if (!listModal || !accountName) return;
    setTxPending(true);
    try {
      const assetId = listModal.asset_id;
      await signTransaction([
        {
          account: 'atomicmarket',
          name: 'announcesale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            seller: accountName,
            asset_ids: [parseInt(assetId, 10)],
            listing_price: `${price.toFixed(4)} XPR`,
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
            sender_asset_ids: [parseInt(assetId, 10)],
            recipient_asset_ids: [],
            memo: 'sale',
          },
        },
      ]);
      setTxResult({ ok: true, msg: 'NFT listed for sale!' });
      setListModal(null);
      fetchAssets();
    } catch (e: any) {
      setTxResult({ ok: false, msg: e.message || 'Transaction failed' });
    } finally {
      setTxPending(false);
    }
  };

  const handleCancelListing = async (assetId: string) => {
    const sale = sales[assetId];
    if (!sale || !accountName) return;
    setTxPending(true);
    try {
      await signTransaction([
        {
          account: 'atomicmarket',
          name: 'cancelsale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: { sale_id: parseInt(sale.sale_id, 10) },
        },
      ]);
      setTxResult({ ok: true, msg: 'Listing cancelled!' });
      fetchAssets();
    } catch (e: any) {
      setTxResult({ ok: false, msg: e.message || 'Transaction failed' });
    } finally {
      setTxPending(false);
    }
  };

  const handleTransfer = async (recipient: string, memo: string) => {
    if (!transferModal || !accountName) return;
    setTxPending(true);
    try {
      await signTransaction([
        {
          account: 'atomicassets',
          name: 'transfer',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            from: accountName,
            to: recipient,
            asset_ids: [parseInt(transferModal.asset_id, 10)],
            memo: memo || '',
          },
        },
      ]);
      setTxResult({ ok: true, msg: 'NFT transferred!' });
      setTransferModal(null);
      fetchAssets();
    } catch (e: any) {
      setTxResult({ ok: false, msg: e.message || 'Transaction failed' });
    } finally {
      setTxPending(false);
    }
  };

  const handleBurn = async () => {
    if (!burnModal || !accountName) return;
    setTxPending(true);
    try {
      await signTransaction([
        {
          account: 'atomicassets',
          name: 'burnasset',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            asset_owner: accountName,
            asset_id: parseInt(burnModal.asset_id, 10),
          },
        },
      ]);
      setTxResult({ ok: true, msg: 'NFT burned!' });
      setBurnModal(null);
      fetchAssets();
    } catch (e: any) {
      setTxResult({ ok: false, msg: e.message || 'Transaction failed' });
    } finally {
      setTxPending(false);
    }
  };

  // Format sale price
  const formatPrice = (sale: SaleInfo) => {
    if (sale.price) {
      const raw = parseInt(sale.price.amount, 10);
      const prec = sale.price.token_precision || 4;
      const val = raw / Math.pow(10, prec);
      return `${val.toLocaleString(undefined, {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      })} ${sale.price.token_symbol || 'XPR'}`;
    }
    return sale.listing_price || '? XPR';
  };

  // --- Not connected ---
  if (!accountName) {
    return (
      <>
        <Head>
          <title>My NFTs - {appName}</title>
        </Head>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
          <div className="text-6xl">🎨</div>
          <h1 className="text-2xl font-bold text-white">My NFTs</h1>
          <p className="text-neutral-400 text-center max-w-md">
            Connect your wallet to view your NFT inventory, list for sale,
            transfer, or burn assets.
          </p>
          <button
            onClick={() => ual?.showModal?.()}
            className="px-6 py-3 rounded-lg bg-neon/20 border border-neon text-neon font-semibold hover:bg-neon/30 transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>My NFTs - {appName}</title>
      </Head>

      {/* Tx result toast */}
      {txResult && (
        <div
          className={`fixed top-20 right-4 z-[200] px-4 py-3 rounded-lg border text-sm font-medium ${
            txResult.ok
              ? 'bg-green-900/80 border-green-500 text-green-300'
              : 'bg-red-900/80 border-red-500 text-red-300'
          }`}
        >
          {txResult.msg}
          <button
            onClick={() => setTxResult(null)}
            className="ml-3 text-white/60 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Tx pending overlay */}
      {txPending && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60">
          <div className="bg-neutral-900 border border-neon/30 rounded-xl p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-neon border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-white">Signing transaction...</p>
          </div>
        </div>
      )}

      {/* Modals */}
      {listModal && (
        <ListForSaleModal
          asset={listModal}
          onClose={() => setListModal(null)}
          onConfirm={handleListForSale}
        />
      )}
      {transferModal && (
        <TransferModal
          asset={transferModal}
          onClose={() => setTransferModal(null)}
          onConfirm={handleTransfer}
        />
      )}
      {burnModal && (
        <BurnModal
          asset={burnModal}
          onClose={() => setBurnModal(null)}
          onConfirm={handleBurn}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">My NFTs</h1>
            <p className="text-neutral-400 text-sm mt-1">
              {accountName} · {assets.length} asset
              {assets.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Collection filter */}
          {collections.length > 1 && (
            <select
              value={filterCollection}
              onChange={(e) => setFilterCollection(e.target.value)}
              className="bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 text-white text-sm focus:border-neon focus:outline-none"
            >
              <option value="all">All Collections</option>
              {collections.map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-8 h-8 border-2 border-neon border-t-transparent rounded-full" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300 text-sm mb-6">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredAssets.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📦</div>
            <p className="text-neutral-400">
              {assets.length === 0
                ? 'No NFTs found in this wallet'
                : 'No NFTs match this filter'}
            </p>
          </div>
        )}

        {/* NFT Grid */}
        {!loading && filteredAssets.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAssets.map((asset) => {
              const immData =
                asset.template?.immutable_data || asset.data || {};
              const imgUrl = getIpfsImage(immData);
              const name = immData.name || asset.name || `#${asset.asset_id}`;
              const rarity = immData.rarity;
              const sale = sales[asset.asset_id];

              return (
                <div
                  key={asset.asset_id}
                  className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:border-neon/30 transition-colors group relative"
                >
                  {/* Sale badge */}
                  {sale && (
                    <div className="absolute top-3 right-3 z-10 bg-green-900/80 border border-green-500/50 rounded-full px-3 py-1 text-xs font-semibold text-green-300">
                      FOR SALE
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-square bg-neutral-900 flex items-center justify-center overflow-hidden">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-neutral-600 text-4xl">🖼</div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold truncate">
                      {name}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1 truncate">
                      {asset.collection.name ||
                        asset.collection.collection_name}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-neutral-500 text-xs">
                        Mint #{asset.template_mint}
                      </span>
                      {rarity && (
                        <span className="text-purple-400 text-xs bg-purple-900/20 px-2 py-0.5 rounded-full">
                          {rarity}
                        </span>
                      )}
                    </div>

                    {/* Sale price */}
                    {sale && (
                      <p className="text-neon font-mono text-sm mt-2">
                        {formatPrice(sale)}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {sale ? (
                        <button
                          onClick={() => handleCancelListing(asset.asset_id)}
                          className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-neutral-700/50 border border-neutral-600 text-neutral-300 text-xs font-medium hover:bg-neutral-700 transition-colors"
                        >
                          Cancel Listing
                        </button>
                      ) : (
                        <button
                          onClick={() => setListModal(asset)}
                          className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-neon/10 border border-neon/30 text-neon text-xs font-medium hover:bg-neon/20 transition-colors"
                        >
                          List for Sale
                        </button>
                      )}
                      <button
                        onClick={() => setTransferModal(asset)}
                        className="px-3 py-1.5 rounded-lg bg-purple-900/10 border border-purple-500/30 text-purple-300 text-xs font-medium hover:bg-purple-900/20 transition-colors"
                      >
                        Transfer
                      </button>
                      <button
                        onClick={() => setBurnModal(asset)}
                        className="px-3 py-1.5 rounded-lg bg-red-900/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-900/20 transition-colors"
                      >
                        Burn
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default withUAL(MyNFTs);

export const getStaticPaths: GetStaticPaths = async () => {
  const chainsKeys = Object.keys(chainsConfig);
  const paths = chainsKeys.map((chainKey) => ({
    params: { chainKey },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chainKey = params?.chainKey as string;
  return {
    props: { chainKey },
  };
};
