import { useEffect, useState, useCallback } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import Head from 'next/head';
import { withUAL } from '@libs/ual-compat';
import { GetServerSideProps } from 'next';

import { ipfsEndpoint, appName } from '@configs/globalsConfig';

import { getAssetService, AssetProps } from '@services/asset/getAssetService';

import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Attributes } from '@components/Attributes';

import { isAuthorizedAccount } from '@utils/isAuthorizedAccount';
import { collectionTabs } from '@utils/collectionTabs';
import { handlePreview } from '@utils/handlePreview';

const API_BASE = 'https://xpr.api.atomicassets.io';

interface SaleInfo {
  sale_id: string;
  seller: string;
  buyer: string;
  listing_price: string;
  listing_symbol: string;
  state: number;
  price?: { token_precision: number; amount: number };
  updated_at_time: string;
}

function formatXprPrice(listing_price: string, precision = 4): string {
  const raw = parseInt(listing_price, 10);
  if (isNaN(raw)) return '0.0000 XPR';
  const xpr = raw / Math.pow(10, precision);
  return (
    xpr.toLocaleString(undefined, {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }) + ' XPR'
  );
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

interface AssetViewProps {
  ual: any;
  chainKey: string;
  asset: AssetProps;
}

function Asset({ ual, chainKey, asset }: AssetViewProps) {
  const collection = asset.collection;
  const [images, setImages] = useState([]);
  const accountName = ual?.activeUser?.accountName || '';

  // Marketplace state
  const [activeSale, setActiveSale] = useState<SaleInfo | null>(null);
  const [salesHistory, setSalesHistory] = useState<SaleInfo[]>([]);
  const [loadingSale, setLoadingSale] = useState(true);
  const [txLoading, setTxLoading] = useState(false);
  const [txResult, setTxResult] = useState<{
    success: boolean;
    txId?: string;
    error?: string;
  } | null>(null);
  const [showListModal, setShowListModal] = useState(false);
  const [listPrice, setListPrice] = useState('');

  useEffect(() => {
    handlePreview(asset, setImages);
  }, [asset]);

  const fetchSaleData = useCallback(async () => {
    setLoadingSale(true);
    try {
      const [activeRes, historyRes] = await Promise.all([
        fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=1&asset_id=${asset.asset_id}`
        ),
        fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=3&asset_id=${asset.asset_id}&sort=updated&order=desc&limit=20`
        ),
      ]);
      const activeJson = await activeRes.json();
      const historyJson = await historyRes.json();
      if (activeJson.success && activeJson.data?.length > 0) {
        setActiveSale(activeJson.data[0]);
      } else {
        setActiveSale(null);
      }
      if (historyJson.success) {
        setSalesHistory(historyJson.data || []);
      }
    } catch {
      // silently fail
    } finally {
      setLoadingSale(false);
    }
  }, [asset.asset_id]);

  useEffect(() => {
    fetchSaleData();
  }, [fetchSaleData]);

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

  const handleBuy = async () => {
    if (!activeSale || !accountName) return;
    setTxLoading(true);
    setTxResult(null);
    try {
      const formattedPrice = rawPriceToAsset(
        activeSale.listing_price,
        activeSale.listing_symbol || 'XPR',
        activeSale.price?.token_precision || 4
      );
      const actions = [
        {
          account: 'eosio.token',
          name: 'transfer',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            from: accountName,
            to: 'atomicmarket',
            quantity: formattedPrice,
            memo: 'deposit',
          },
        },
        {
          account: 'atomicmarket',
          name: 'purchasesale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            sale_id: parseInt(activeSale.sale_id, 10),
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
      setTimeout(() => fetchSaleData(), 2000);
    } catch (e: any) {
      setTxResult({ success: false, error: e.message || 'Transaction failed' });
    } finally {
      setTxLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!activeSale || !accountName) return;
    setTxLoading(true);
    setTxResult(null);
    try {
      const actions = [
        {
          account: 'atomicmarket',
          name: 'cancelsale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: { sale_id: parseInt(activeSale.sale_id, 10) },
        },
      ];
      const result = await signTransaction(actions);
      const txId =
        result?.transactionId ||
        result?.transaction?.transaction_id ||
        result?.processed?.id ||
        '';
      setTxResult({ success: true, txId });
      setTimeout(() => fetchSaleData(), 2000);
    } catch (e: any) {
      setTxResult({ success: false, error: e.message || 'Cancel failed' });
    } finally {
      setTxLoading(false);
    }
  };

  const handleListForSale = async () => {
    if (!accountName || !listPrice) return;
    const priceNum = parseFloat(listPrice);
    if (isNaN(priceNum) || priceNum < 0.0001) return;
    setTxLoading(true);
    setTxResult(null);
    try {
      const actions = [
        {
          account: 'atomicmarket',
          name: 'announcesale',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            seller: accountName,
            asset_ids: [parseInt(asset.asset_id, 10)],
            listing_price: `${priceNum.toFixed(4)} XPR`,
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
            sender_asset_ids: [parseInt(asset.asset_id, 10)],
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
      setTxResult({ success: true, txId });
      setShowListModal(false);
      setListPrice('');
      setTimeout(() => fetchSaleData(), 2000);
    } catch (e: any) {
      setTxResult({ success: false, error: e.message || 'Listing failed' });
    } finally {
      setTxLoading(false);
    }
  };

  const hasAuthorization = isAuthorizedAccount(ual, collection) as boolean;
  const isOwner = accountName && asset.owner === accountName;
  const isSeller = activeSale && activeSale.seller === accountName;

  return (
    <>
      <Head>
        <title>{`NFT #${asset.asset_id} - ${appName}`}</title>
      </Head>

      <Header.Root
        breadcrumb={[
          [
            hasAuthorization ? 'My Collections' : 'Explorer',
            hasAuthorization ? `/${chainKey}` : `/${chainKey}/explorer`,
          ],
          [
            collection.collection_name,
            `/${chainKey}/collection/${collection.collection_name}`,
          ],
          [
            collectionTabs[3].name,
            `/${chainKey}/collection/${collection.collection_name}?tab=${collectionTabs[3].key}`,
          ],
          [asset.name],
        ]}
      >
        <Header.Content title={asset.name} subtitle={`NFT #${asset.asset_id}`}>
          {hasAuthorization && !asset.burned_by_account && (
            <Link
              href={`/${chainKey}/collection/${collection.collection_name}/asset/${asset.asset_id}/edit`}
              className="btn mt-4"
            >
              Update NFT
            </Link>
          )}
        </Header.Content>
        <Header.Banner images={images} />
      </Header.Root>

      {/* Marketplace Actions */}
      {!loadingSale && (
        <section className="container py-4">
          <div className="max-w-2xl mx-auto">
            {/* Active Sale Badge + Actions */}
            {activeSale && (
              <div className="rounded-xl border border-[#00ff88]/30 bg-neutral-900/90 p-4 md:p-6 mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block bg-[#00ff88] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      FOR SALE
                    </span>
                    <p className="text-[#00ff88] text-2xl md:text-3xl font-bold">
                      {formatXprPrice(
                        activeSale.listing_price,
                        activeSale.price?.token_precision || 4
                      )}
                    </p>
                    <p className="text-neutral-500 text-sm mt-1">
                      Seller: {activeSale.seller}
                    </p>
                  </div>
                  <div className="w-full sm:w-auto">
                    {isSeller ? (
                      <button
                        onClick={handleCancel}
                        disabled={txLoading}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 transition-all disabled:opacity-50 cursor-pointer text-lg"
                      >
                        {txLoading ? 'Cancelling...' : 'Cancel Listing'}
                      </button>
                    ) : accountName ? (
                      <button
                        onClick={handleBuy}
                        disabled={txLoading}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#9966ff] text-white font-bold hover:bg-[#7b4fe0] transition-all disabled:opacity-50 cursor-pointer text-lg shadow-[0_0_20px_rgba(153,102,255,0.3)]"
                      >
                        {txLoading ? 'Processing...' : 'Buy Now'}
                      </button>
                    ) : (
                      <button
                        onClick={() => ual?.showModal?.()}
                        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#9966ff] text-white font-bold hover:bg-[#7b4fe0] transition-all cursor-pointer text-lg"
                      >
                        Connect to Buy
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* List for Sale button (owner, not currently listed) */}
            {!activeSale && isOwner && !asset.burned_by_account && (
              <div className="rounded-xl border border-neutral-700 bg-neutral-900/90 p-4 md:p-6 mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold">You own this NFT</p>
                    <p className="text-neutral-500 text-sm">
                      List it on the marketplace to sell
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowListModal(true);
                      setTxResult(null);
                    }}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-bold hover:bg-[#00cc6a] transition-all cursor-pointer text-lg"
                  >
                    List for Sale
                  </button>
                </div>
              </div>
            )}

            {/* Transaction Result */}
            {txResult && (
              <div
                className={`rounded-lg p-4 mb-4 ${
                  txResult.success
                    ? 'bg-green-900/30 border border-green-700'
                    : 'bg-red-900/30 border border-red-700'
                }`}
              >
                {txResult.success ? (
                  <div className="flex items-center gap-3">
                    <span className="text-[#00ff88] text-xl">✓</span>
                    <span className="text-green-400">
                      Transaction successful!
                    </span>
                    {txResult.txId && (
                      <a
                        href={`https://explorer.xprnetwork.org/transaction/${txResult.txId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9966ff] underline text-sm ml-auto"
                      >
                        View TX
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-red-400">{txResult.error}</p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <Tab.Group>
        <Tab.List className="tab-list mb-4 md:mb-8">
          <Tab className="tab">Information</Tab>
          <Tab className="tab">Immutable data</Tab>
          {Object.keys(asset.mutable_data).length > 0 && (
            <Tab className="tab">Mutable data</Tab>
          )}
        </Tab.List>
        <Tab.Panels className="container">
          <Tab.Panel>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-0 justify-center pb-8">
              <div className="grid grid-cols-1 h-fit">
                <Card
                  href={`/${chainKey}/collection/${collection.collection_name}`}
                  image={
                    collection.img ? `${ipfsEndpoint}/${collection.img}` : ''
                  }
                  title={collection.name}
                  subtitle={`by ${collection.author}`}
                />
              </div>
              <div className="md:w-1/2 w-full">
                <div className="w-full md:max-w-sm mx-auto">
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Owner</span>
                    <span className="font-bold">{asset.owner}</span>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Mint Number</span>
                    <div>
                      <span className="font-bold pr-2">
                        {Number(asset.template_mint) > 0
                          ? asset.template_mint
                          : 'Minting...'}
                      </span>
                      {asset.template && (
                        <span className="">
                          (max:{' '}
                          {parseInt(asset.template.max_supply, 10) ||
                            'Infinite'}
                          )
                        </span>
                      )}
                    </div>
                  </div>
                  {asset.template && (
                    <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                      <span>Template ID</span>
                      <Link
                        href={`/${chainKey}/collection/${collection.collection_name}/template/${asset.template.template_id}`}
                        className="font-bold underline"
                      >
                        {asset.template.template_id}
                      </Link>
                    </div>
                  )}
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Schema</span>
                    <Link
                      href={`/${chainKey}/collection/${collection.collection_name}/schema/${asset.schema.schema_name}`}
                      className="font-bold underline"
                    >
                      {asset.schema.schema_name}
                    </Link>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Burnable</span>
                    <span className="font-bold">
                      {asset.is_burnable ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 body-2 text-white border-b border-neutral-700">
                    <span>Transferable</span>
                    <span className="font-bold">
                      {asset.is_transferable ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <Attributes.List>
              {asset.schema.format.map((schema) => (
                <Attributes.Item
                  key={schema.name}
                  name={schema.name}
                  type={schema.type}
                  value={
                    asset.template
                      ? asset.template.immutable_data[schema.name]
                      : asset.immutable_data[schema.name]
                  }
                />
              ))}
            </Attributes.List>
          </Tab.Panel>
          {Object.keys(asset.mutable_data).length > 0 && (
            <Tab.Panel>
              <Attributes.List>
                {asset.schema.format.map((schema) => (
                  <Attributes.Item
                    key={schema.name}
                    name={schema.name}
                    type={schema.type}
                    value={asset.mutable_data[schema.name]}
                  />
                ))}
              </Attributes.List>
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>

      {/* Sales History */}
      {salesHistory.length > 0 && (
        <section className="container py-8">
          <h3 className="text-xl font-bold text-white mb-4">
            📜 Sales History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-neutral-500 border-b border-neutral-800">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Buyer</th>
                  <th className="text-left py-3 px-4">Seller</th>
                </tr>
              </thead>
              <tbody>
                {salesHistory.map((sale) => {
                  const date = new Date(parseInt(sale.updated_at_time, 10));
                  return (
                    <tr
                      key={sale.sale_id}
                      className="border-b border-neutral-800/50 hover:bg-neutral-800/30"
                    >
                      <td className="py-3 px-4 text-neutral-400">
                        {date.toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-[#00ff88] font-semibold">
                        {formatXprPrice(
                          sale.listing_price,
                          sale.price?.token_precision || 4
                        )}
                      </td>
                      <td className="py-3 px-4 text-neutral-400">
                        {sale.buyer || '—'}
                      </td>
                      <td className="py-3 px-4 text-neutral-400">
                        {sale.seller}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* List for Sale Modal */}
      {showListModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-bold">List for Sale</h3>
              <button
                onClick={() => {
                  setShowListModal(false);
                  setTxResult(null);
                }}
                className="text-neutral-500 hover:text-white text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>
            <div className="mb-6">
              <label className="block text-neutral-400 text-sm mb-2">
                Price in XPR
              </label>
              <input
                type="number"
                step="0.0001"
                min="0.0001"
                value={listPrice}
                onChange={(e) => setListPrice(e.target.value)}
                placeholder="0.0000"
                className="w-full bg-neutral-800 text-white border border-neutral-700 rounded-lg px-4 py-4 text-xl focus:border-[#00ff88] focus:outline-none"
              />
              {listPrice && parseFloat(listPrice) > 0 && (
                <p className="text-neutral-500 text-sm mt-2">
                  Listing for:{' '}
                  <span className="text-[#00ff88] font-bold">
                    {parseFloat(listPrice).toFixed(4)} XPR
                  </span>
                </p>
              )}
            </div>
            {txResult?.error && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                {txResult.error}
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowListModal(false);
                  setTxResult(null);
                }}
                className="flex-1 py-3 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleListForSale}
                disabled={
                  txLoading || !listPrice || parseFloat(listPrice) < 0.0001
                }
                className="flex-1 py-3 rounded-lg bg-[#00ff88] text-neutral-900 font-bold hover:bg-[#00cc6a] transition-all disabled:opacity-50 cursor-pointer"
              >
                {txLoading ? 'Processing...' : 'List Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const chainKey = params.chainKey as string;
  const assetId = params.assetId as string;

  try {
    const { data: asset } = await getAssetService(chainKey, { assetId });

    return {
      props: {
        asset: asset.data,
        chainKey,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default withUAL(Asset);
