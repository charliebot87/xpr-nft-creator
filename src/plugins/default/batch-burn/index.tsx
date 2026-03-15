import { useState, useRef, useEffect, useMemo } from 'react';
import { withUAL } from '@libs/ual-compat';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  Fire,
  CircleNotch,
  CheckSquare,
  Square,
  WarningCircle,
  ArrowsClockwise,
  MagnifyingGlass,
  WarningOctagon,
} from 'phosphor-react';

import { Modal } from '@components/Modal';
import { appName } from '@configs/globalsConfig';
import { pluginInfo } from './config';

const ATOMICASSETS_API = 'https://xpr.api.atomicassets.io';
const EXPLORER = 'https://explorer.xprnetwork.org';

interface NFTAsset {
  asset_id: string;
  name: string;
  collection: { collection_name: string; name: string };
  template: { template_id: string } | null;
  data: { img?: string; image?: string; [key: string]: any };
  schema: { schema_name: string };
}

interface BurnResult {
  txId: string;
  burned: string[];
  failed: string[];
}

function BatchBurn({ ual }: { ual: any }) {
  const modalRef = useRef<any>(null);
  const confirmRef = useRef<any>(null);
  const router = useRouter();
  const { chainKey } = router.query;

  const [assets, setAssets] = useState<NFTAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [collectionFilter, setCollectionFilter] = useState<string>('');
  const [search, setSearch] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });
  const [results, setResults] = useState<BurnResult[]>([]);
  const [modalState, setModalState] = useState<{
    title: string;
    isSuccess?: boolean;
    message?: string;
    txResults?: BurnResult[];
  }>({ title: '' });

  const accountName = ual?.activeUser?.accountName;

  async function fetchAssets() {
    if (!accountName) return;
    setLoading(true);
    setLoadError(null);
    setAssets([]);
    setSelected(new Set());
    try {
      const res = await fetch(
        `${ATOMICASSETS_API}/atomicassets/v1/assets?owner=${accountName}&limit=100`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setAssets(data.data || []);
    } catch (err: any) {
      setLoadError(err?.message || 'Failed to fetch NFTs. Please try again.');
    }
    setLoading(false);
  }

  useEffect(() => {
    if (accountName) {
      fetchAssets();
    }
  }, [accountName]);

  const collections = useMemo(() => {
    const names = new Set(assets.map((a) => a.collection.collection_name));
    return Array.from(names).sort();
  }, [assets]);

  const filteredAssets = useMemo(() => {
    return assets.filter((a) => {
      const matchCollection =
        !collectionFilter || a.collection.collection_name === collectionFilter;
      const matchSearch =
        !search ||
        a.name?.toLowerCase().includes(search.toLowerCase()) ||
        a.asset_id.includes(search) ||
        a.collection.collection_name
          .toLowerCase()
          .includes(search.toLowerCase());
      return matchCollection && matchSearch;
    });
  }, [assets, collectionFilter, search]);

  function toggleAsset(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(filteredAssets.map((a) => a.asset_id)));
  }

  function deselectAll() {
    setSelected(new Set());
  }

  function getImageUrl(asset: NFTAsset): string | null {
    const img = asset.data?.img || asset.data?.image;
    if (!img) return null;
    if (img.startsWith('http')) return img;
    return `https://atomicassets.io/ipfs/${img}`;
  }

  async function executeBurn() {
    if (!ual?.activeUser || selected.size === 0) return;
    const owner = accountName;
    const toburn = Array.from(selected);
    const batchSize = 50;
    const totalBatches = Math.ceil(toburn.length / batchSize);
    const newResults: BurnResult[] = [];

    setSubmitting(true);
    setBatchProgress({ current: 0, total: totalBatches });

    for (let i = 0; i < toburn.length; i += batchSize) {
      const batch = toburn.slice(i, i + batchSize);
      const actions = batch.map((asset_id) => ({
        account: 'atomicassets',
        name: 'burnasset',
        authorization: [{ actor: owner, permission: 'active' }],
        data: { asset_owner: owner, asset_id },
      }));

      try {
        const result = await ual.activeUser.signTransaction(
          { actions },
          { blocksBehind: 3, expireSeconds: 60 }
        );
        const txId = result?.transactionId || '';
        newResults.push({ txId, burned: batch, failed: [] });
      } catch (err: any) {
        newResults.push({ txId: '', burned: [], failed: batch });
      }

      setBatchProgress({
        current: Math.floor(i / batchSize) + 1,
        total: totalBatches,
      });
    }

    setResults((prev) => [...prev, ...newResults]);

    const totalBurned = newResults.reduce((s, r) => s + r.burned.length, 0);
    const totalFailed = newResults.reduce((s, r) => s + r.failed.length, 0);

    if (totalFailed === 0) {
      setModalState({
        title: '🔥 Burn Complete',
        isSuccess: true,
        message: `Successfully burned ${totalBurned} NFT${
          totalBurned !== 1 ? 's' : ''
        }.`,
        txResults: newResults,
      });
    } else {
      setModalState({
        title: totalBurned > 0 ? 'Partial Burn' : 'Burn Failed',
        isSuccess: totalBurned > 0,
        message: `Burned: ${totalBurned} | Failed: ${totalFailed}`,
        txResults: newResults,
      });
    }

    modalRef.current?.openModal();
    setSubmitting(false);
    setBatchProgress({ current: 0, total: 0 });

    // Refresh assets after burn
    await fetchAssets();
  }

  function handleLogin() {
    ual?.showModal();
  }

  if (!accountName) {
    return (
      <>
        <Head>
          <title>{`${pluginInfo.name} - ${appName}`}</title>
        </Head>
        <div className="mx-auto my-14 text-center">
          <h2 className="headline-2">Connect your wallet</h2>
          <p className="body-1 mt-2 mb-6 text-neutral-400">
            You need to connect your wallet to burn NFTs
          </p>
          <button type="button" className="btn" onClick={handleLogin}>
            Connect Wallet
          </button>
        </div>
      </>
    );
  }

  const selectedAssets = assets.filter((a) => selected.has(a.asset_id));
  const batchCount = Math.ceil(selected.size / 50);

  return (
    <div className="container flex flex-col gap-8 pb-16">
      <Head>
        <title>{`${pluginInfo.name} - ${appName}`}</title>
      </Head>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-xl flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,60,60,0.2), rgba(200,30,30,0.05))',
            border: '1px solid rgba(255,60,60,0.35)',
            boxShadow: '0 0 20px rgba(255,60,60,0.15)',
          }}
        >
          <Fire size={32} style={{ color: '#ff3c3c' }} />
        </div>
        <div>
          <h1
            className="headline-1"
            style={{
              color: '#ff3c3c',
              textShadow: '0 0 20px rgba(255,60,60,0.5)',
            }}
          >
            Batch Burn
          </h1>
          <span className="body-1 text-neutral-400">
            Permanently destroy multiple NFTs at once — this cannot be undone
          </span>
        </div>
      </div>

      {/* Warning Banner */}
      <div
        className="rounded-xl px-5 py-4 flex items-start gap-3"
        style={{
          background: 'rgba(255,60,60,0.08)',
          border: '1px solid rgba(255,60,60,0.4)',
          boxShadow: '0 0 20px rgba(255,60,60,0.08)',
        }}
      >
        <WarningOctagon
          size={22}
          style={{ color: '#ff3c3c', flexShrink: 0, marginTop: 1 }}
        />
        <div>
          <p className="text-sm font-bold mb-1" style={{ color: '#ff3c3c' }}>
            IRREVERSIBLE ACTION
          </p>
          <p className="text-sm text-neutral-400">
            Burning NFTs permanently destroys them from the blockchain. There is
            absolutely no way to recover burned assets. Double-check your
            selection before confirming.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div
        className="rounded-2xl p-4 sm:p-6"
        style={{
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,60,60,0.12)',
          boxShadow: '0 0 30px rgba(255,60,60,0.04)',
        }}
      >
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* Search */}
          <div
            className="flex items-center gap-2 flex-1 min-w-[180px] rounded-xl px-3 py-2"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <MagnifyingGlass
              size={16}
              style={{ color: '#888', flexShrink: 0 }}
            />
            <input
              type="text"
              placeholder="Search name, collection, ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-neutral-600 text-sm"
            />
          </div>

          {/* Collection filter */}
          {collections.length > 1 && (
            <select
              value={collectionFilter}
              onChange={(e) => setCollectionFilter(e.target.value)}
              className="rounded-xl px-3 py-2 text-sm text-white outline-none"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <option value="">All Collections</option>
              {collections.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}

          {/* Select All / Deselect All */}
          <button
            type="button"
            onClick={selectAll}
            disabled={filteredAssets.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#ccc',
            }}
          >
            <CheckSquare size={14} />
            Select All
          </button>
          <button
            type="button"
            onClick={deselectAll}
            disabled={selected.size === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#ccc',
            }}
          >
            <Square size={14} />
            Deselect All
          </button>

          {/* Refresh */}
          <button
            type="button"
            onClick={fetchAssets}
            disabled={loading}
            title="Refresh NFTs"
            style={{ color: '#666' }}
            className="hover:text-white transition-colors"
          >
            <ArrowsClockwise
              size={20}
              className={loading ? 'animate-spin' : ''}
            />
          </button>
        </div>

        {/* Selection count */}
        {selected.size > 0 && (
          <div
            className="mb-4 px-4 py-2.5 rounded-xl flex items-center justify-between"
            style={{
              background: 'rgba(255,60,60,0.08)',
              border: '1px solid rgba(255,60,60,0.3)',
            }}
          >
            <span className="text-sm font-bold" style={{ color: '#ff3c3c' }}>
              🔥 {selected.size} asset{selected.size !== 1 ? 's' : ''} selected
              for burning
            </span>
            <span className="text-xs text-neutral-500">
              {batchCount} transaction{batchCount !== 1 ? 's' : ''} required
            </span>
          </div>
        )}

        {/* Error */}
        {loadError && (
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4"
            style={{
              background: 'rgba(255,60,60,0.08)',
              border: '1px solid rgba(255,60,60,0.3)',
            }}
          >
            <WarningCircle size={18} style={{ color: '#ff3c3c' }} />
            <span className="text-sm" style={{ color: '#ff3c3c' }}>
              {loadError}
            </span>
            <button
              type="button"
              onClick={fetchAssets}
              className="ml-auto text-xs underline"
              style={{ color: '#ff3c3c' }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Grid */}
        {loading ? (
          <div
            className="flex items-center justify-center gap-3 py-16"
            style={{ color: '#ff3c3c' }}
          >
            <div className="matrix-spinner">
              <div className="matrix-spinner-outer" />
              <div className="matrix-spinner-inner" />
              <div className="matrix-spinner-dot" />
            </div>
            <span className="text-sm">Fetching your NFTs...</span>
          </div>
        ) : filteredAssets.length === 0 ? (
          <div className="text-center py-16 text-neutral-500">
            {assets.length === 0
              ? `No NFTs found for ${accountName}`
              : 'No NFTs match your filters'}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredAssets.map((asset) => {
              const isSelected = selected.has(asset.asset_id);
              const imgUrl = getImageUrl(asset);
              return (
                <button
                  key={asset.asset_id}
                  type="button"
                  onClick={() => toggleAsset(asset.asset_id)}
                  className="relative rounded-xl overflow-hidden text-left transition-all duration-200 group"
                  style={{
                    background: isSelected
                      ? 'rgba(255,60,60,0.1)'
                      : 'rgba(255,255,255,0.02)',
                    border: isSelected
                      ? '2px solid rgba(255,60,60,0.7)'
                      : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: isSelected
                      ? '0 0 16px rgba(255,60,60,0.2)'
                      : 'none',
                  }}
                >
                  {/* Checkbox overlay */}
                  <div
                    className="absolute top-2 right-2 z-10 rounded-md p-0.5"
                    style={{
                      background: isSelected
                        ? 'rgba(255,60,60,0.9)'
                        : 'rgba(0,0,0,0.6)',
                      border: isSelected
                        ? '1px solid #ff3c3c'
                        : '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {isSelected ? (
                      <CheckSquare size={14} style={{ color: '#fff' }} />
                    ) : (
                      <Square size={14} style={{ color: '#888' }} />
                    )}
                  </div>

                  {/* Image */}
                  <div
                    className="w-full aspect-square flex items-center justify-center overflow-hidden"
                    style={{ background: 'rgba(0,0,0,0.3)' }}
                  >
                    {imgUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgUrl}
                        alt={asset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <Fire
                        size={32}
                        style={{ color: 'rgba(255,60,60,0.2)' }}
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-2">
                    <div
                      className="text-xs font-bold truncate"
                      style={{ color: isSelected ? '#ff7070' : '#ddd' }}
                    >
                      {asset.name || `#${asset.asset_id}`}
                    </div>
                    <div className="text-xs text-neutral-500 truncate">
                      {asset.collection.collection_name}
                    </div>
                    <div className="text-xs text-neutral-600 font-mono truncate">
                      #{asset.asset_id}
                    </div>
                    {asset.template && (
                      <div className="text-xs text-neutral-700 truncate">
                        tmpl {asset.template.template_id}
                      </div>
                    )}
                  </div>

                  {/* Burn overlay on hover */}
                  {isSelected && (
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(255,60,60,0.15)' }}
                    >
                      <Fire size={40} style={{ color: '#ff3c3c' }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Burn button */}
      {assets.length > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            disabled={selected.size === 0 || submitting}
            onClick={() => confirmRef.current?.openModal()}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
            style={{
              background:
                selected.size === 0 || submitting
                  ? 'rgba(255,60,60,0.06)'
                  : 'linear-gradient(135deg, rgba(255,60,60,0.25), rgba(200,20,20,0.15))',
              border:
                selected.size === 0 || submitting
                  ? '1px solid rgba(255,60,60,0.15)'
                  : '1px solid rgba(255,60,60,0.6)',
              color:
                selected.size === 0 || submitting
                  ? 'rgba(255,60,60,0.3)'
                  : '#ff3c3c',
              boxShadow:
                selected.size === 0 || submitting
                  ? 'none'
                  : '0 0 30px rgba(255,60,60,0.2)',
              cursor:
                selected.size === 0 || submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? (
              <>
                <CircleNotch size={20} className="animate-spin" />
                Burning batch {batchProgress.current}/{batchProgress.total}...
              </>
            ) : (
              <>
                <Fire size={20} />
                Burn {selected.size} NFT{selected.size !== 1 ? 's' : ''}
              </>
            )}
          </button>
        </div>
      )}

      {/* Past burn results */}
      {results.length > 0 && (
        <div
          className="rounded-2xl p-4 sm:p-6"
          style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,60,60,0.12)',
          }}
        >
          <h2 className="headline-3 mb-4 flex items-center gap-2">
            <Fire size={18} style={{ color: '#ff3c3c' }} />
            <span className="text-white">Burn History</span>
          </h2>
          <div className="flex flex-col gap-2">
            {results.map((r, i) => (
              <div
                key={i}
                className="rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-sm"
                style={{
                  background:
                    r.failed.length === 0
                      ? 'rgba(255,60,60,0.06)'
                      : 'rgba(255,150,0,0.06)',
                  border:
                    r.failed.length === 0
                      ? '1px solid rgba(255,60,60,0.2)'
                      : '1px solid rgba(255,150,0,0.2)',
                }}
              >
                <span
                  style={{
                    color: r.failed.length === 0 ? '#ff7070' : '#ffaa44',
                  }}
                >
                  {r.burned.length > 0 && <>🔥 {r.burned.length} burned</>}
                  {r.failed.length > 0 && <> · ⚠️ {r.failed.length} failed</>}
                </span>
                {r.txId && (
                  <Link
                    href={`${EXPLORER}/transaction/${r.txId}`}
                    target="_blank"
                    className="font-mono text-xs underline underline-offset-2"
                    style={{ color: '#ff7070' }}
                  >
                    {r.txId.slice(0, 20)}...
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <Modal ref={confirmRef} title="⚠️ Confirm Permanent Burn">
        <div
          className="mt-4 rounded-xl px-5 py-4"
          style={{
            background: 'rgba(255,60,60,0.08)',
            border: '1px solid rgba(255,60,60,0.4)',
          }}
        >
          <p className="text-base font-bold mb-2" style={{ color: '#ff3c3c' }}>
            THIS CANNOT BE UNDONE
          </p>
          <p className="text-sm text-neutral-300">
            You are about to{' '}
            <span className="font-bold" style={{ color: '#ff3c3c' }}>
              PERMANENTLY BURN {selected.size} NFT
              {selected.size !== 1 ? 's' : ''}
            </span>
            . Once burned, these assets are gone forever from the blockchain. No
            recovery is possible.
          </p>
          {selected.size > 0 && (
            <div className="mt-3 text-xs text-neutral-500">
              This will require{' '}
              <span className="font-mono text-neutral-400">{batchCount}</span>{' '}
              transaction{batchCount !== 1 ? 's' : ''} (up to 50 assets each).
              You will need to sign each one in your wallet.
            </div>
          )}
        </div>

        {/* Preview of selected */}
        {selectedAssets.length > 0 && selectedAssets.length <= 12 && (
          <div className="mt-4">
            <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider font-semibold">
              Assets to burn:
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedAssets.map((a) => (
                <span
                  key={a.asset_id}
                  className="text-xs px-2 py-1 rounded-lg font-mono"
                  style={{
                    background: 'rgba(255,60,60,0.08)',
                    border: '1px solid rgba(255,60,60,0.2)',
                    color: '#ff7070',
                  }}
                >
                  {a.name || `#${a.asset_id}`}
                </span>
              ))}
            </div>
          </div>
        )}
        {selectedAssets.length > 12 && (
          <div className="mt-4">
            <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider font-semibold">
              Assets to burn ({selectedAssets.length} total):
            </p>
            <div className="flex flex-wrap gap-1">
              {selectedAssets.slice(0, 8).map((a) => (
                <span
                  key={a.asset_id}
                  className="text-xs px-2 py-1 rounded-lg font-mono"
                  style={{
                    background: 'rgba(255,60,60,0.08)',
                    border: '1px solid rgba(255,60,60,0.2)',
                    color: '#ff7070',
                  }}
                >
                  {a.name || `#${a.asset_id}`}
                </span>
              ))}
              <span className="text-xs px-2 py-1 text-neutral-600">
                +{selectedAssets.length - 8} more...
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={() => {
              confirmRef.current?.closeModal();
              executeBurn();
            }}
            className="flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,60,60,0.25), rgba(200,20,20,0.15))',
              border: '1px solid rgba(255,60,60,0.6)',
              color: '#ff3c3c',
              boxShadow: '0 0 20px rgba(255,60,60,0.15)',
            }}
          >
            <Fire size={16} />
            Yes, Burn Forever
          </button>
          <button
            type="button"
            onClick={() => confirmRef.current?.closeModal()}
            className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#aaa',
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Result Modal */}
      <Modal ref={modalRef} title={modalState.title}>
        <div className="mt-3">
          <p className="text-sm text-neutral-300 mb-3">{modalState.message}</p>
          {modalState.txResults && modalState.txResults.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">
                Transactions
              </p>
              {modalState.txResults.map((r, i) =>
                r.txId ? (
                  <Link
                    key={r.txId + i}
                    href={`${EXPLORER}/transaction/${r.txId}`}
                    target="_blank"
                    className="flex items-center gap-2 py-2 underline underline-offset-2 text-sm font-mono break-all"
                    style={{ color: '#ff7070' }}
                  >
                    {r.txId}
                  </Link>
                ) : (
                  <div
                    key={i}
                    className="text-xs text-neutral-500 flex items-center gap-2"
                  >
                    <WarningCircle size={14} style={{ color: '#ffaa44' }} />
                    {r.failed.length} asset{r.failed.length !== 1 ? 's' : ''}{' '}
                    failed to burn
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default withUAL(BatchBurn);
