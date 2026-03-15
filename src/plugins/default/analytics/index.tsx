import { useState, useEffect } from 'react';
import { withUAL } from 'ual-reactjs-renderer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CircleNotch, ChartLine, Users, Cube, Lightning } from 'phosphor-react';
import axios from 'axios';

import { Input } from '@components/Input';
import { appName } from '@configs/globalsConfig';
import * as chainsConfig from '@configs/chainsConfig';

import { pluginInfo } from './config';

interface CollectionStats {
  assets: string;
  burned: string;
  templates: string;
  schemas: string;
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

  const [collectionName, setCollectionName] = useState('');
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<CollectionStats | null>(null);
  const [accounts, setAccounts] = useState<AccountEntry[]>([]);
  const [templates, setTemplates] = useState<TemplateEntry[]>([]);
  const [error, setError] = useState('');

  const chainConfig = chainsConfig[chainKey as string];
  const aaEndpoint = chainConfig?.aaEndpoint;

  async function fetchAnalytics() {
    if (!collectionName || !aaEndpoint) return;

    setLoading(true);
    setError('');
    setStats(null);
    setAccounts([]);
    setTemplates([]);

    try {
      const [statsRes, accountsRes, templatesRes] = await Promise.all([
        axios.get(
          `${aaEndpoint}/atomicassets/v1/collections/${collectionName}/stats`
        ),
        axios.get(
          `${aaEndpoint}/atomicassets/v1/accounts?collection_name=${collectionName}&limit=100&order=desc&sort=assets`
        ),
        axios.get(
          `${aaEndpoint}/atomicassets/v1/templates?collection_name=${collectionName}&limit=50&order=desc&sort=created`
        ),
      ]);

      if (statsRes.data?.data) {
        setStats(statsRes.data.data);
      }
      if (accountsRes.data?.data) {
        setAccounts(accountsRes.data.data);
      }
      if (templatesRes.data?.data) {
        setTemplates(templatesRes.data.data);
      }
    } catch (err) {
      setError('Collection not found or API error.');
      console.error(err);
    }

    setLoading(false);
  }

  const totalHeld = accounts.reduce(
    (sum, a) => sum + parseInt(a.assets || '0'),
    0
  );

  // Simple bar chart renderer
  function BarChart({
    data,
    maxVal,
  }: {
    data: { label: string; value: number }[];
    maxVal: number;
  }) {
    return (
      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 w-28 truncate text-right font-mono">
              {item.label}
            </span>
            <div
              className="flex-1 h-6 rounded-full overflow-hidden"
              style={{ background: 'rgba(0,0,0,0.3)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.max((item.value / maxVal) * 100, 2)}%`,
                  background: `linear-gradient(90deg, #00ff88, ${
                    i % 2 === 0 ? '#00cc6a' : '#9945FF'
                  })`,
                  boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
                }}
              />
            </div>
            <span className="text-xs font-mono neon-text w-16 text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-12 pb-16">
      <Head>
        <title>{`${pluginInfo.name} - ${appName}`}</title>
      </Head>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div
            className="p-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
              color: '#0a0a0a',
            }}
          >
            <ChartLine size={32} />
          </div>
          <div>
            <h1 className="headline-1 neon-text">{pluginInfo.name}</h1>
            <span className="body-1 text-neutral-400">
              Collection holder distribution and mint stats
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="glass-card p-8">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <Input
              type="text"
              label="Collection Name"
              placeholder="e.g. mycollection"
              onChange={(e) => setCollectionName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchAnalytics()}
            />
          </div>
          <button
            type="button"
            className="btn"
            onClick={fetchAnalytics}
            disabled={!collectionName || loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <CircleNotch size={18} className="animate-spin" />
                Analyzing...
              </span>
            ) : (
              'Analyze'
            )}
          </button>
        </div>
        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>

      {/* Stats Overview */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: 'Total NFTs',
              value: stats.assets,
              icon: <Cube size={24} />,
              color: '#00ff88',
            },
            {
              label: 'Burned',
              value: stats.burned,
              icon: <Lightning size={24} />,
              color: '#ff4444',
            },
            {
              label: 'Templates',
              value: stats.templates,
              icon: <ChartLine size={24} />,
              color: '#9945FF',
            },
            {
              label: 'Schemas',
              value: stats.schemas,
              icon: <Users size={24} />,
              color: '#00aaff',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 flex flex-col items-center text-center gap-3"
            >
              <div style={{ color: stat.color }}>{stat.icon}</div>
              <div
                className="text-3xl font-bold font-mono"
                style={{ color: stat.color }}
              >
                {parseInt(stat.value || '0').toLocaleString()}
              </div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Holder Distribution */}
      {accounts.length > 0 && (
        <div className="glass-card p-8">
          <h2 className="headline-3 mb-2 flex items-center gap-3">
            <Users size={28} className="text-neon" />
            <span>Holder Distribution</span>
            <span className="badge-medium">{accounts.length} holders</span>
          </h2>
          <p className="text-neutral-500 mb-6">
            Top holders by NFT count ({totalHeld.toLocaleString()} total held)
          </p>

          <BarChart
            data={accounts.slice(0, 20).map((a) => ({
              label: a.account,
              value: parseInt(a.assets),
            }))}
            maxVal={parseInt(accounts[0]?.assets || '1')}
          />

          {accounts.length > 20 && (
            <p className="text-neutral-500 mt-4 text-sm">
              Showing top 20 of {accounts.length} holders
            </p>
          )}
        </div>
      )}

      {/* Template Performance */}
      {templates.length > 0 && (
        <div className="glass-card p-8">
          <h2 className="headline-3 mb-6 flex items-center gap-3">
            <Cube size={28} style={{ color: '#9945FF' }} />
            <span>Template Performance</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((tpl) => {
              const issued = parseInt(tpl.issued_supply || '0');
              const max = parseInt(tpl.max_supply || '0');
              const pct = max > 0 ? (issued / max) * 100 : 100;

              return (
                <div
                  key={tpl.template_id}
                  className="rounded-xl p-4 border transition-all duration-300 hover:border-neon/30"
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderColor: 'rgba(0, 255, 136, 0.06)',
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold">
                        {tpl.immutable_data?.name ||
                          `Template #${tpl.template_id}`}
                      </div>
                      <div className="text-xs text-neutral-500 font-mono">
                        #{tpl.template_id}
                      </div>
                    </div>
                    <span className="badge-small">
                      {issued}/{max > 0 ? max : '∞'}
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
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
                            : 'linear-gradient(90deg, #00ff88, #00cc6a)',
                      }}
                    />
                  </div>
                  <div className="text-xs text-neutral-500 mt-2">
                    {max > 0
                      ? `${pct.toFixed(1)}% minted`
                      : `${issued} minted (unlimited)`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default withUAL(Analytics);
