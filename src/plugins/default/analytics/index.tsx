import { useState, useEffect } from 'react';
import { withUAL } from '@libs/ual-compat';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  CircleNotch,
  ChartLine,
  Users,
  Cube,
  Lightning,
  ArrowsClockwise,
} from 'phosphor-react';

import { appName } from '@configs/globalsConfig';
import * as chainsConfig from '@configs/chainsConfig';

import { pluginInfo } from './config';

const AA_ENDPOINT = 'https://xpr.api.atomicassets.io';

interface CollectionInfo {
  collection_name: string;
  name: string;
  author: string;
  img?: string;
}

interface CollectionStats {
  collection_name: string;
  assets: number;
  templates: number;
  holders: number;
}

interface AccountEntry {
  account: string;
  assets: string;
}

interface TemplateEntry {
  template_id: string;
  issued_supply: string;
  max_supply: string;
  immutable_data?: {
    name?: string;
    img?: string;
  };
}

function Analytics({ ual }: { ual: any }) {
  const router = useRouter();
  const { chainKey } = router.query;

  const [collections, setCollections] = useState<CollectionInfo[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [collectionStats, setCollectionStats] = useState<
    Record<string, CollectionStats>
  >({});
  const [loadingStats, setLoadingStats] = useState(false);

  const [selectedCollection, setSelectedCollection] =
    useState<CollectionInfo | null>(null);
  const [topHolders, setTopHolders] = useState<AccountEntry[]>([]);
  const [loadingHolders, setLoadingHolders] = useState(false);
  const [templates, setTemplates] = useState<TemplateEntry[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);

  const [error, setError] = useState('');

  const accountName = ual?.activeUser?.accountName;

  // Fetch user collections on login
  useEffect(() => {
    if (!accountName) {
      setCollections([]);
      setCollectionStats({});
      setSelectedCollection(null);
      return;
    }
    fetchUserCollections(accountName);
  }, [accountName]);

  async function fetchUserCollections(author: string) {
    setLoadingCollections(true);
    setError('');
    try {
      const res = await fetch(
        `${AA_ENDPOINT}/atomicassets/v1/collections?author=${author}&limit=100&order=desc&sort=created`
      );
      const data = await res.json();
      const cols: CollectionInfo[] = (data.data || []).map((c: any) => ({
        collection_name: c.collection_name,
        name: c.data?.name || c.collection_name,
        author: c.author,
        img: c.data?.img,
      }));
      setCollections(cols);
      if (cols.length > 0) {
        fetchAllStats(cols);
      }
    } catch {
      setError('Failed to load collections.');
    }
    setLoadingCollections(false);
  }

  async function fetchAllStats(cols: CollectionInfo[]) {
    setLoadingStats(true);
    const results: Record<string, CollectionStats> = {};

    await Promise.all(
      cols.map(async (col) => {
        try {
          const [assetsRes, holdersRes] = await Promise.all([
            fetch(
              `${AA_ENDPOINT}/atomicassets/v1/collections/${col.collection_name}/stats`
            ),
            fetch(
              `${AA_ENDPOINT}/atomicassets/v1/accounts?collection_name=${col.collection_name}&limit=1`
            ),
          ]);
          const assetsData = await assetsRes.json();
          const holdersData = await holdersRes.json();

          results[col.collection_name] = {
            collection_name: col.collection_name,
            assets: parseInt(assetsData.data?.assets || '0'),
            templates: parseInt(assetsData.data?.templates || '0'),
            holders: holdersData.data?.length ?? 0,
          };
        } catch {
          results[col.collection_name] = {
            collection_name: col.collection_name,
            assets: 0,
            templates: 0,
            holders: 0,
          };
        }
      })
    );

    setCollectionStats(results);
    setLoadingStats(false);
  }

  async function selectCollection(col: CollectionInfo) {
    setSelectedCollection(col);
    setTopHolders([]);
    setTemplates([]);
    fetchTopHolders(col.collection_name);
    fetchTemplates(col.collection_name);
  }

  async function fetchTopHolders(collectionName: string) {
    setLoadingHolders(true);
    try {
      const res = await fetch(
        `${AA_ENDPOINT}/atomicassets/v1/accounts?collection_name=${collectionName}&limit=20&order=desc&sort=assets`
      );
      const data = await res.json();
      setTopHolders(data.data || []);
    } catch {
      setTopHolders([]);
    }
    setLoadingHolders(false);
  }

  async function fetchTemplates(collectionName: string) {
    setLoadingTemplates(true);
    try {
      const res = await fetch(
        `${AA_ENDPOINT}/atomicassets/v1/templates?collection_name=${collectionName}&limit=50&order=desc&sort=created`
      );
      const data = await res.json();
      setTemplates(data.data || []);
    } catch {
      setTemplates([]);
    }
    setLoadingTemplates(false);
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
          <div
            className="inline-flex p-4 rounded-full mb-6"
            style={{
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.3)',
            }}
          >
            <ChartLine size={40} style={{ color: '#00ff88' }} />
          </div>
          <h2 className="headline-2 neon-text">Collection Analytics</h2>
          <p className="body-1 mt-2 mb-6 text-neutral-400">
            Connect your wallet to view your collection analytics
          </p>
          <button type="button" className="btn" onClick={handleLogin}>
            Connect Wallet
          </button>
        </div>
      </>
    );
  }

  const selectedStats = selectedCollection
    ? collectionStats[selectedCollection.collection_name]
    : null;

  const maxHolderAssets =
    topHolders.length > 0 ? parseInt(topHolders[0]?.assets || '1') : 1;

  return (
    <div className="container flex flex-col gap-10 pb-16">
      <Head>
        <title>{`${pluginInfo.name} - ${appName}`}</title>
      </Head>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))',
            border: '1px solid rgba(0,255,136,0.3)',
            boxShadow: '0 0 20px rgba(0,255,136,0.1)',
          }}
        >
          <ChartLine size={32} style={{ color: '#00ff88' }} />
        </div>
        <div>
          <h1
            className="headline-1"
            style={{
              color: '#00ff88',
              textShadow: '0 0 20px rgba(0,255,136,0.5)',
            }}
          >
            {pluginInfo.name}
          </h1>
          <span className="body-1 text-neutral-400">
            Your collection performance and holder distribution
          </span>
        </div>
        <button
          type="button"
          onClick={() => fetchUserCollections(accountName)}
          disabled={loadingCollections}
          className="ml-auto p-2 rounded-lg transition-opacity hover:opacity-100"
          style={{ color: '#00ff88', opacity: 0.7 }}
          title="Refresh"
        >
          <ArrowsClockwise
            size={20}
            className={loadingCollections ? 'animate-spin' : ''}
          />
        </button>
      </div>

      {error && (
        <div
          className="p-4 rounded-xl text-red-400"
          style={{
            background: 'rgba(255,0,0,0.05)',
            border: '1px solid rgba(255,0,0,0.2)',
          }}
        >
          {error}
        </div>
      )}

      {/* Collections Grid */}
      {loadingCollections ? (
        <div
          className="flex items-center justify-center gap-3 py-16"
          style={{ color: '#00ff88' }}
        >
          <CircleNotch size={28} className="animate-spin" />
          <span>Loading your collections...</span>
        </div>
      ) : collections.length === 0 ? (
        <div
          className="rounded-2xl p-12 text-center"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(0,255,136,0.1)',
          }}
        >
          <Cube size={48} className="mx-auto mb-4 text-neutral-600" />
          <p className="text-neutral-400">
            No collections found for{' '}
            <span style={{ color: '#00ff88' }}>{accountName}</span>
          </p>
        </div>
      ) : (
        <>
          <div>
            <h2
              className="headline-3 mb-4 flex items-center gap-2"
              style={{ color: '#00ff88' }}
            >
              <span>Your Collections</span>
              <span
                className="text-sm font-normal px-2 py-0.5 rounded-lg font-mono"
                style={{
                  background: 'rgba(0,255,136,0.1)',
                  border: '1px solid rgba(0,255,136,0.2)',
                }}
              >
                {collections.length}
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {collections.map((col) => {
                const stats = collectionStats[col.collection_name];
                const isSelected =
                  selectedCollection?.collection_name === col.collection_name;

                return (
                  <button
                    key={col.collection_name}
                    type="button"
                    onClick={() => selectCollection(col)}
                    className="text-left rounded-2xl p-5 transition-all duration-200"
                    style={{
                      background: isSelected
                        ? 'rgba(0,255,136,0.08)'
                        : 'rgba(0,0,0,0.4)',
                      border: isSelected
                        ? '1px solid rgba(0,255,136,0.5)'
                        : '1px solid rgba(0,255,136,0.1)',
                      boxShadow: isSelected
                        ? '0 0 30px rgba(0,255,136,0.1)'
                        : 'none',
                    }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm"
                        style={{
                          background: isSelected
                            ? 'rgba(0,255,136,0.15)'
                            : 'rgba(255,255,255,0.05)',
                          border: isSelected
                            ? '1px solid rgba(0,255,136,0.3)'
                            : '1px solid rgba(255,255,255,0.08)',
                          color: isSelected ? '#00ff88' : '#aaa',
                        }}
                      >
                        {col.collection_name.slice(0, 3).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-bold text-sm truncate"
                          style={{ color: isSelected ? '#00ff88' : '#fff' }}
                        >
                          {col.name}
                        </div>
                        <div className="text-xs text-neutral-500 font-mono">
                          {col.collection_name}
                        </div>
                      </div>
                    </div>

                    {loadingStats && !stats ? (
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <CircleNotch size={12} className="animate-spin" />
                        Loading stats...
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          {
                            label: 'NFTs',
                            value: stats?.assets ?? 0,
                            icon: <Cube size={14} />,
                            color: '#00ff88',
                          },
                          {
                            label: 'Templates',
                            value: stats?.templates ?? 0,
                            icon: <ChartLine size={14} />,
                            color: '#9945FF',
                          },
                          {
                            label: 'Holders',
                            value: stats?.holders ?? 0,
                            icon: <Users size={14} />,
                            color: '#00aaff',
                          },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className="rounded-lg p-2 text-center"
                            style={{
                              background: 'rgba(0,0,0,0.3)',
                              border: '1px solid rgba(255,255,255,0.04)',
                            }}
                          >
                            <div
                              className="flex justify-center mb-1"
                              style={{ color: s.color }}
                            >
                              {s.icon}
                            </div>
                            <div
                              className="text-sm font-bold font-mono"
                              style={{ color: s.color }}
                            >
                              {s.value.toLocaleString()}
                            </div>
                            <div className="text-xs text-neutral-600">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected collection detail */}
          {selectedCollection && (
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,255,136,0.15)',
                boxShadow: '0 0 30px rgba(0,255,136,0.05)',
              }}
            >
              <h2
                className="headline-3 mb-1"
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0,255,136,0.4)',
                }}
              >
                {selectedCollection.name}
              </h2>
              <p className="text-neutral-500 font-mono text-sm mb-6">
                {selectedCollection.collection_name}
              </p>

              {/* Stats bar */}
              {selectedStats && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      label: 'Total NFTs Minted',
                      value: selectedStats.assets,
                      icon: <Cube size={20} />,
                      color: '#00ff88',
                    },
                    {
                      label: 'Total Templates',
                      value: selectedStats.templates,
                      icon: <ChartLine size={20} />,
                      color: '#9945FF',
                    },
                    {
                      label: 'Unique Holders',
                      value: selectedStats.holders,
                      icon: <Users size={20} />,
                      color: '#00aaff',
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl p-5 text-center"
                      style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: `1px solid ${s.color}22`,
                      }}
                    >
                      <div
                        className="flex justify-center mb-2"
                        style={{ color: s.color }}
                      >
                        {s.icon}
                      </div>
                      <div
                        className="text-2xl font-bold font-mono"
                        style={{ color: s.color }}
                      >
                        {s.value.toLocaleString()}
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Holders */}
                <div>
                  <h3
                    className="font-bold text-lg mb-4 flex items-center gap-2"
                    style={{ color: '#00ff88' }}
                  >
                    <Users size={20} />
                    Top Holders
                  </h3>

                  {loadingHolders ? (
                    <div
                      className="flex items-center gap-2 py-8 justify-center"
                      style={{ color: '#00ff88' }}
                    >
                      <CircleNotch size={20} className="animate-spin" />
                      <span className="text-sm">Loading holders...</span>
                    </div>
                  ) : topHolders.length === 0 ? (
                    <p className="text-neutral-600 text-sm">
                      No holders found.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {topHolders.map((holder, i) => {
                        const pct =
                          (parseInt(holder.assets) / maxHolderAssets) * 100;
                        return (
                          <div
                            key={holder.account}
                            className="flex items-center gap-3"
                          >
                            <span className="text-xs text-neutral-600 w-5 text-right font-mono">
                              {i + 1}
                            </span>
                            <span
                              className="text-xs font-mono w-32 truncate"
                              style={{ color: i === 0 ? '#00ff88' : '#ccc' }}
                            >
                              {holder.account}
                            </span>
                            <div
                              className="flex-1 h-5 rounded-full overflow-hidden"
                              style={{ background: 'rgba(0,0,0,0.4)' }}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{
                                  width: `${Math.max(pct, 2)}%`,
                                  background:
                                    i === 0
                                      ? 'linear-gradient(90deg, #00ff88, #00cc6a)'
                                      : i < 3
                                      ? 'linear-gradient(90deg, #9945FF, #7733cc)'
                                      : 'linear-gradient(90deg, #00aaff, #0088cc)',
                                  boxShadow:
                                    i === 0
                                      ? '0 0 8px rgba(0,255,136,0.4)'
                                      : 'none',
                                }}
                              />
                            </div>
                            <span
                              className="text-xs font-mono w-10 text-right"
                              style={{ color: '#00ff88' }}
                            >
                              {parseInt(holder.assets).toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Template Performance */}
                <div>
                  <h3
                    className="font-bold text-lg mb-4 flex items-center gap-2"
                    style={{ color: '#9945FF' }}
                  >
                    <Cube size={20} />
                    Template Performance
                  </h3>

                  {loadingTemplates ? (
                    <div
                      className="flex items-center gap-2 py-8 justify-center"
                      style={{ color: '#9945FF' }}
                    >
                      <CircleNotch size={20} className="animate-spin" />
                      <span className="text-sm">Loading templates...</span>
                    </div>
                  ) : templates.length === 0 ? (
                    <p className="text-neutral-600 text-sm">
                      No templates found.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {templates.slice(0, 10).map((tpl) => {
                        const issued = parseInt(tpl.issued_supply || '0');
                        const max = parseInt(tpl.max_supply || '0');
                        const pct = max > 0 ? (issued / max) * 100 : 100;
                        return (
                          <div
                            key={tpl.template_id}
                            className="rounded-xl p-3"
                            style={{
                              background: 'rgba(0,0,0,0.3)',
                              border: '1px solid rgba(153,69,255,0.1)',
                            }}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="text-sm font-medium text-white truncate max-w-[180px]">
                                  {tpl.immutable_data?.name ||
                                    `Template #${tpl.template_id}`}
                                </div>
                                <div className="text-xs text-neutral-600 font-mono">
                                  #{tpl.template_id}
                                </div>
                              </div>
                              <span
                                className="text-xs font-mono px-2 py-0.5 rounded-lg"
                                style={{
                                  background: 'rgba(153,69,255,0.1)',
                                  color: '#9945FF',
                                  border: '1px solid rgba(153,69,255,0.2)',
                                }}
                              >
                                {issued}/{max > 0 ? max : '∞'}
                              </span>
                            </div>
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{ background: 'rgba(0,0,0,0.4)' }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.min(pct, 100)}%`,
                                  background:
                                    pct > 80
                                      ? 'linear-gradient(90deg, #ff4444, #ff6666)'
                                      : pct > 50
                                      ? 'linear-gradient(90deg, #ffaa00, #ffcc00)'
                                      : 'linear-gradient(90deg, #9945FF, #7733cc)',
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default withUAL(Analytics);
