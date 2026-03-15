import { useState, useRef, useEffect, useMemo } from 'react';
import { withUAL } from '@libs/ual-compat';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  CircleNotch,
  Coins,
  MagnifyingGlass,
  Users,
  CheckSquare,
  Square,
  TrendUp,
  TrendDown,
  ArrowsClockwise,
} from 'phosphor-react';

import { Modal } from '@components/Modal';

import * as chainsConfig from '@configs/chainsConfig';
import { appName } from '@configs/globalsConfig';

import {
  getSimpleDexTokens,
  getTokenHolders,
  SimpleDexToken,
  TokenHolder,
} from '@services/simpledex/getCreatorsService';

import { pluginInfo } from './config';

type HolderInfo = TokenHolder;

interface TokenAirdropProps {
  ual: any;
}

interface ModalState {
  title: string;
  message?: string;
  details?: string;
  transactionsIDs?: string[];
}

function formatMcap(mcap: number): string {
  if (mcap >= 1_000_000) return `$${(mcap / 1_000_000).toFixed(2)}M`;
  if (mcap >= 1_000) return `$${(mcap / 1_000).toFixed(1)}K`;
  return `$${mcap.toFixed(2)}`;
}

function formatPrice(price: number): string {
  if (price === 0) return '$0';
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  if (price < 0.01) return `$${price.toFixed(7)}`;
  return `$${price.toFixed(4)}`;
}

function formatAmount(amount: number): string {
  if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(2)}B`;
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(2)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
  return amount.toFixed(2);
}

function TokenAirdrop({ ual }: TokenAirdropProps) {
  const modalRef = useRef(null);
  const router = useRouter();
  const { chainKey } = router.query;

  const [tokens, setTokens] = useState<SimpleDexToken[]>([]);
  const [selectedToken, setSelectedToken] = useState<SimpleDexToken | null>(
    null
  );
  const [selectedTokenImage, setSelectedTokenImage] = useState<string | null>(
    null
  );
  const [holders, setHolders] = useState<HolderInfo[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(
    new Set()
  );
  const [loadingTokens, setLoadingTokens] = useState(false);
  const [loadingHolders, setLoadingHolders] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [tokenSearch, setTokenSearch] = useState('');
  const [holderSearch, setHolderSearch] = useState('');
  const [modal, setModal] = useState<ModalState>({ title: '' });

  // Dropdown states for collection/schema/template
  const [collections, setCollections] = useState<string[]>([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');

  const [schemas, setSchemas] = useState<string[]>([]);
  const [loadingSchemas, setLoadingSchemas] = useState(false);
  const [selectedSchema, setSelectedSchema] = useState('');

  const [templates, setTemplates] = useState<
    { template_id: string; name: string }[]
  >([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');

  const chainIdLogged =
    ual?.activeUser?.chainId ?? ual?.activeUser?.chain?.chainId;
  const chainId = chainsConfig[chainKey as string]?.chainId;

  // Fetch tokens from SimpleDEX indexer
  async function fetchTokens() {
    setLoadingTokens(true);
    try {
      const data = await getSimpleDexTokens();
      setTokens(data);
    } catch (err) {
      console.error('Token fetch error:', err);
      setTokens([]);
    }
    setLoadingTokens(false);
  }

  // Fetch holders for a specific token, also grab imageUrl from full token data
  async function fetchHolders(token: SimpleDexToken) {
    setLoadingHolders(true);
    setHolders([]);
    setSelectedAccounts(new Set());
    setSelectedTokenImage(null);

    try {
      // Fetch full token info for the image
      const fullRes = await fetch(
        `https://indexer.protonnz.com/api/tokens?symbol=${token.symbol}`,
        { headers: { 'User-Agent': 'XPR-NFT-Creator/1.0' } }
      );
      if (fullRes.ok) {
        const fullData = await fullRes.json();
        const fullToken = (fullData.tokens || [])[0];
        if (fullToken?.imageUrl) {
          setSelectedTokenImage(fullToken.imageUrl);
        }
      }
    } catch {
      // image is optional
    }

    try {
      const data = await getTokenHolders(token.tokenId);
      setHolders(data);
      // Select all by default
      setSelectedAccounts(new Set(data.map((h) => h.account)));
    } catch (err) {
      console.error('Holder fetch error:', err);
      setHolders([]);
    }
    setLoadingHolders(false);
  }

  useEffect(() => {
    if (chainId && chainIdLogged && chainId === chainIdLogged) {
      fetchTokens();
    }
  }, [chainId, chainIdLogged]);

  // Fetch collections when user is logged in
  useEffect(() => {
    if (!ual?.activeUser?.accountName) return;
    const accountName = ual.activeUser.accountName;
    const aaEndpoint = chainsConfig[chainKey as string]?.aaEndpoint;
    if (!aaEndpoint) return;

    setLoadingCollections(true);
    setCollections([]);
    setSelectedCollection('');
    setSchemas([]);
    setSelectedSchema('');
    setTemplates([]);
    setSelectedTemplateId('');

    fetch(
      `${aaEndpoint}/atomicassets/v1/collections?author=${accountName}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        const names = (data.data || []).map(
          (c: { collection_name: string }) => c.collection_name
        );
        setCollections(names);
        if (names.length === 1) {
          setSelectedCollection(names[0]);
        }
      })
      .catch(() => setCollections([]))
      .finally(() => setLoadingCollections(false));
  }, [ual?.activeUser?.accountName, chainKey]);

  // Fetch schemas when collection is selected
  useEffect(() => {
    if (!selectedCollection) {
      setSchemas([]);
      setSelectedSchema('');
      setTemplates([]);
      setSelectedTemplateId('');
      return;
    }
    const aaEndpoint = chainsConfig[chainKey as string]?.aaEndpoint;
    if (!aaEndpoint) return;

    setLoadingSchemas(true);
    setSchemas([]);
    setSelectedSchema('');
    setTemplates([]);
    setSelectedTemplateId('');

    fetch(
      `${aaEndpoint}/atomicassets/v1/schemas?collection_name=${selectedCollection}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        const names = (data.data || []).map(
          (s: { schema_name: string }) => s.schema_name
        );
        setSchemas(names);
        if (names.length === 1) {
          setSelectedSchema(names[0]);
        }
      })
      .catch(() => setSchemas([]))
      .finally(() => setLoadingSchemas(false));
  }, [selectedCollection, chainKey]);

  // Fetch templates when schema is selected
  useEffect(() => {
    if (!selectedCollection || !selectedSchema) {
      setTemplates([]);
      setSelectedTemplateId('');
      return;
    }
    const aaEndpoint = chainsConfig[chainKey as string]?.aaEndpoint;
    if (!aaEndpoint) return;

    setLoadingTemplates(true);
    setTemplates([]);
    setSelectedTemplateId('');

    fetch(
      `${aaEndpoint}/atomicassets/v1/templates?collection_name=${selectedCollection}&schema_name=${selectedSchema}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        const items = (data.data || []).map(
          (t: {
            template_id: string;
            immutable_data?: { name?: string };
            name?: string;
          }) => ({
            template_id: t.template_id,
            name: t.immutable_data?.name || t.name || `Template`,
          })
        );
        setTemplates(items);
        if (items.length === 1) {
          setSelectedTemplateId(items[0].template_id);
        }
      })
      .catch(() => setTemplates([]))
      .finally(() => setLoadingTemplates(false));
  }, [selectedCollection, selectedSchema, chainKey]);

  const filteredTokens = useMemo(
    () =>
      tokens.filter(
        (t) =>
          t.name?.toLowerCase().includes(tokenSearch.toLowerCase()) ||
          t.symbol?.toLowerCase().includes(tokenSearch.toLowerCase())
      ),
    [tokens, tokenSearch]
  );

  const filteredHolders = useMemo(
    () =>
      holders.filter((h) =>
        h.account?.toLowerCase().includes(holderSearch.toLowerCase())
      ),
    [holders, holderSearch]
  );

  function toggleHolder(account: string) {
    setSelectedAccounts((prev) => {
      const next = new Set(prev);
      if (next.has(account)) {
        next.delete(account);
      } else {
        next.add(account);
      }
      return next;
    });
  }

  function selectAll() {
    setSelectedAccounts(new Set(filteredHolders.map((h) => h.account)));
  }

  function deselectAll() {
    setSelectedAccounts(new Set());
  }

  async function handleAirdrop() {
    if (!selectedTemplateId || selectedAccounts.size === 0 || !ual?.activeUser)
      return;

    setSubmitting(true);
    try {
      const holderAccounts = Array.from(selectedAccounts);

      // Build mint actions for each holder
      const actions = holderAccounts.map((account) => ({
        account: 'atomicassets',
        name: 'mintasset',
        authorization: [
          {
            actor: ual.activeUser.accountName,
            permission: 'active',
          },
        ],
        data: {
          authorized_minter: ual.activeUser.accountName,
          collection_name: selectedCollection,
          schema_name: selectedSchema,
          template_id: parseInt(selectedTemplateId),
          new_asset_owner: account,
          immutable_data: [],
          mutable_data: [],
          tokens_to_back: [],
        },
      }));

      // Batch in groups of 50
      const batchSize = 50;
      const transactionsIDs: string[] = [];

      for (let i = 0; i < actions.length; i += batchSize) {
        const batch = actions.slice(i, i + batchSize);
        const result = await ual.activeUser.signTransaction(
          { actions: batch },
          { blocksBehind: 3, expireSeconds: 60 }
        );
        if (result.transactionId) {
          transactionsIDs.push(result.transactionId);
        }
      }

      modalRef.current?.openModal();
      setModal({
        title: 'Token Airdrop Successful!',
        message: `Minted NFTs to ${holderAccounts.length} token holders.`,
        transactionsIDs,
      });
    } catch (error) {
      modalRef.current?.openModal();
      const details = JSON.stringify(error, undefined, 2);
      setModal({
        title: 'Airdrop Error',
        message:
          error?.cause?.json?.error?.details?.[0]?.message ||
          'Failed to airdrop NFTs',
        details,
      });
    }
    setSubmitting(false);
  }

  function handleLogin() {
    ual?.showModal();
  }

  if (chainId && chainIdLogged && chainId === chainIdLogged) {
    return (
      <div className="container flex flex-col gap-10 pb-16">
        <Head>
          <title>{`${pluginInfo.name} - ${appName}`}</title>
        </Head>

        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div
              className="p-3 rounded-xl flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.05))',
                border: '1px solid rgba(0,255,136,0.3)',
                boxShadow: '0 0 20px rgba(0,255,136,0.1)',
              }}
            >
              <Coins size={32} style={{ color: '#00ff88' }} />
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
                Airdrop NFTs to SimpleDEX / SimpleLaunch token holders
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Token */}
        <div
          className="rounded-2xl p-4 sm:p-6"
          style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(0,255,136,0.15)',
            boxShadow: '0 0 30px rgba(0,255,136,0.05)',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="headline-3 flex items-center gap-3">
              <span
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0,255,136,0.6)',
                }}
              >
                01
              </span>
              <span className="text-white">Select Token</span>
              <span className="text-sm font-normal text-neutral-500">
                ({tokens.length} tokens loaded)
              </span>
            </h2>
            <button
              type="button"
              onClick={fetchTokens}
              disabled={loadingTokens}
              title="Refresh tokens"
              style={{ color: '#00ff88', opacity: 0.7 }}
              className="hover:opacity-100 transition-opacity"
            >
              <ArrowsClockwise
                size={20}
                className={loadingTokens ? 'animate-spin' : ''}
              />
            </button>
          </div>

          {/* Search */}
          <div className="mb-5">
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(0,255,136,0.2)',
              }}
            >
              <MagnifyingGlass
                size={18}
                style={{ color: '#00ff88', opacity: 0.7 }}
              />
              <input
                type="text"
                placeholder="Search by name or symbol..."
                value={tokenSearch}
                onChange={(e) => setTokenSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder-neutral-600"
                style={{ fontSize: '0.95rem' }}
              />
              {tokenSearch && (
                <button
                  type="button"
                  onClick={() => setTokenSearch('')}
                  className="text-neutral-600 hover:text-neutral-400 transition-colors text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {loadingTokens ? (
            <div
              className="flex items-center justify-center gap-3 py-16"
              style={{ color: '#00ff88' }}
            >
              <CircleNotch size={24} className="animate-spin" />
              <span className="text-sm">Loading tokens from SimpleDEX...</span>
            </div>
          ) : filteredTokens.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No tokens found matching &quot;{tokenSearch}&quot;
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto pr-1"
              style={{ maxHeight: '420px' }}
            >
              {filteredTokens.map((token) => {
                const isSelected = selectedToken?.tokenId === token.tokenId;
                const change = (token as any).change24h ?? 0;
                const isUp = change >= 0;

                return (
                  <button
                    key={token.tokenId}
                    type="button"
                    onClick={() => {
                      setSelectedToken(token);
                      fetchHolders(token);
                    }}
                    className="text-left rounded-xl p-4 transition-all duration-200"
                    style={{
                      background: isSelected
                        ? 'rgba(0,255,136,0.08)'
                        : 'rgba(255,255,255,0.02)',
                      border: isSelected
                        ? '1px solid rgba(0,255,136,0.5)'
                        : '1px solid rgba(255,255,255,0.06)',
                      boxShadow: isSelected
                        ? '0 0 20px rgba(0,255,136,0.1), inset 0 0 20px rgba(0,255,136,0.03)'
                        : 'none',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Token symbol badge (no image in compact API) */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
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
                        {token.symbol.slice(0, 3)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-bold text-sm truncate"
                            style={{ color: isSelected ? '#00ff88' : '#fff' }}
                          >
                            {token.symbol}
                          </span>
                          {token.graduated && (
                            <span
                              className="text-xs px-1.5 py-0.5 rounded-md font-medium"
                              style={{
                                background: 'rgba(0,255,136,0.1)',
                                color: '#00ff88',
                                border: '1px solid rgba(0,255,136,0.2)',
                                fontSize: '0.65rem',
                              }}
                            >
                              DEX
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-neutral-500 truncate mt-0.5">
                          {token.name}
                        </div>
                      </div>
                    </div>

                    {/* Price + Mcap row */}
                    <div className="mt-3 flex items-end justify-between">
                      <div>
                        <div
                          className="text-xs font-mono font-semibold"
                          style={{ color: isSelected ? '#00ff88' : '#e0e0e0' }}
                        >
                          {formatPrice(token.price)}
                        </div>
                        <div className="text-xs text-neutral-600 mt-0.5">
                          MCap: {formatMcap(token.mcap)}
                        </div>
                      </div>
                      {change !== 0 && (
                        <div
                          className="flex items-center gap-1 text-xs font-medium"
                          style={{ color: isUp ? '#00ff88' : '#ff4d4d' }}
                        >
                          {isUp ? (
                            <TrendUp size={12} />
                          ) : (
                            <TrendDown size={12} />
                          )}
                          {isUp ? '+' : ''}
                          {change.toFixed(2)}%
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Step 2: Holder List */}
        {selectedToken && (
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,136,0.15)',
              boxShadow: '0 0 30px rgba(0,255,136,0.05)',
            }}
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <div className="flex items-center gap-3 flex-1 flex-wrap">
                <h2 className="headline-3 flex items-center gap-3">
                  <span
                    style={{
                      color: '#00ff88',
                      textShadow: '0 0 10px rgba(0,255,136,0.6)',
                    }}
                  >
                    02
                  </span>
                  <span className="text-white">Holders</span>
                </h2>

                {/* Token badge with image if available */}
                <div className="flex items-center gap-2">
                  {selectedTokenImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedTokenImage}
                      alt={selectedToken.symbol}
                      className="w-8 h-8 rounded-lg object-cover"
                      style={{ border: '1px solid rgba(0,255,136,0.3)' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span className="font-bold" style={{ color: '#00ff88' }}>
                    {selectedToken.symbol}
                  </span>
                </div>

                {!loadingHolders && holders.length > 0 && (
                  <span
                    className="text-sm px-2.5 py-1 rounded-lg font-mono"
                    style={{
                      background: 'rgba(0,255,136,0.1)',
                      color: '#00ff88',
                      border: '1px solid rgba(0,255,136,0.2)',
                    }}
                  >
                    {holders.length} holders
                  </span>
                )}
              </div>

              {/* Select / Deselect All */}
              {!loadingHolders && holders.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={selectAll}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all"
                    style={{
                      background: 'rgba(0,255,136,0.1)',
                      border: '1px solid rgba(0,255,136,0.25)',
                      color: '#00ff88',
                    }}
                  >
                    <CheckSquare size={14} />
                    All
                  </button>
                  <button
                    type="button"
                    onClick={deselectAll}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#aaa',
                    }}
                  >
                    <Square size={14} />
                    None
                  </button>
                  <span className="text-xs text-neutral-500">
                    {selectedAccounts.size} selected
                  </span>
                </div>
              )}
            </div>

            {loadingHolders ? (
              <div
                className="flex items-center justify-center gap-3 py-16"
                style={{ color: '#00ff88' }}
              >
                <CircleNotch size={24} className="animate-spin" />
                <span className="text-sm">Fetching holder list...</span>
              </div>
            ) : holders.length > 0 ? (
              <>
                {/* Holder search */}
                <div className="mb-4">
                  <div
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(0,255,136,0.1)',
                    }}
                  >
                    <MagnifyingGlass
                      size={16}
                      style={{ color: '#00ff88', opacity: 0.5 }}
                    />
                    <input
                      type="text"
                      placeholder="Search holders..."
                      value={holderSearch}
                      onChange={(e) => setHolderSearch(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-white placeholder-neutral-700 text-sm"
                    />
                  </div>
                </div>

                {/* Holder list */}
                <div
                  className="rounded-xl overflow-x-auto overflow-y-auto"
                  style={{
                    maxHeight: '360px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(0,255,136,0.08)',
                  }}
                >
                  <div style={{ minWidth: '480px' }}>
                    {/* Column headers */}
                    <div
                      className="flex items-center px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider sticky top-0"
                      style={{
                        background: 'rgba(0,0,0,0.8)',
                        borderBottom: '1px solid rgba(0,255,136,0.1)',
                        color: 'rgba(0,255,136,0.5)',
                      }}
                    >
                      <div className="w-5 sm:w-7" />
                      <div className="w-8">{'#'}</div>
                      <div className="flex-1">Account</div>
                      <div className="text-right w-20 sm:w-24">Balance</div>
                      <div className="text-right w-20 sm:w-24">Wallet</div>
                      <div className="text-right w-16 sm:w-20">LP</div>
                    </div>

                    {filteredHolders.map((holder, i) => {
                      const isChecked = selectedAccounts.has(holder.account);
                      return (
                        <button
                          key={holder.account}
                          type="button"
                          onClick={() => toggleHolder(holder.account)}
                          className="w-full flex items-center px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm transition-all"
                          style={{
                            background: isChecked
                              ? 'rgba(0,255,136,0.04)'
                              : 'transparent',
                            borderBottom: '1px solid rgba(255,255,255,0.03)',
                          }}
                        >
                          <div className="w-5 sm:w-7 flex-shrink-0">
                            {isChecked ? (
                              <CheckSquare
                                size={15}
                                style={{ color: '#00ff88' }}
                              />
                            ) : (
                              <Square size={15} className="text-neutral-700" />
                            )}
                          </div>
                          <div className="w-8 text-left text-neutral-500 font-mono text-xs">
                            {i + 1}
                          </div>
                          <div
                            className="flex-1 text-left font-mono font-medium truncate text-xs sm:text-sm"
                            style={{ color: isChecked ? '#00ff88' : '#ccc' }}
                          >
                            {holder.account}
                          </div>
                          <div
                            className="w-20 sm:w-24 text-right font-mono text-xs"
                            style={{ color: isChecked ? '#00ff88' : '#888' }}
                          >
                            {formatAmount(holder.amount)}
                          </div>
                          <div className="w-20 sm:w-24 text-right font-mono text-xs text-neutral-600">
                            {holder.walletAmount != null
                              ? formatAmount(holder.walletAmount)
                              : '—'}
                          </div>
                          <div className="w-16 sm:w-20 text-right font-mono text-xs text-neutral-600">
                            {holder.lpAmount != null && holder.lpAmount > 0
                              ? formatAmount(holder.lpAmount)
                              : '—'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {filteredHolders.length === 0 && (
                  <div className="text-center py-8 text-neutral-600 text-sm">
                    No holders match &quot;{holderSearch}&quot;
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-neutral-500">
                No holders found for {selectedToken.symbol}.
              </div>
            )}
          </div>
        )}

        {/* Step 3: Configure & Execute Airdrop */}
        {selectedToken && selectedAccounts.size > 0 && (
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,136,0.15)',
              boxShadow: '0 0 30px rgba(0,255,136,0.05)',
            }}
          >
            <h2 className="headline-3 mb-6 flex items-center gap-3">
              <span
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0,255,136,0.6)',
                }}
              >
                03
              </span>
              <span className="text-white">Configure Airdrop</span>
              <span
                className="text-sm font-normal px-2.5 py-1 rounded-lg font-mono"
                style={{
                  background: 'rgba(0,255,136,0.1)',
                  color: '#00ff88',
                  border: '1px solid rgba(0,255,136,0.2)',
                }}
              >
                {selectedAccounts.size} recipients
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Collection dropdown */}
              <div className="flex flex-col gap-2">
                <label className="body-2 font-bold text-white">
                  Collection Name
                </label>
                <div className="relative">
                  <select
                    value={selectedCollection}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                    disabled={loadingCollections || collections.length === 0}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10"
                    style={{
                      background: 'rgb(23,23,23)',
                      border: '1px solid rgba(0,255,136,0.25)',
                      opacity:
                        loadingCollections || collections.length === 0
                          ? 0.5
                          : 1,
                    }}
                  >
                    {loadingCollections ? (
                      <option value="">Loading collections...</option>
                    ) : collections.length === 0 ? (
                      <option value="">No collections found</option>
                    ) : (
                      <>
                        <option value="">Select collection...</option>
                        {collections.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {loadingCollections ? (
                      <CircleNotch
                        size={16}
                        className="animate-spin"
                        style={{ color: '#00ff88' }}
                      />
                    ) : (
                      <span className="text-neutral-500 text-xs">▼</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Schema dropdown */}
              <div className="flex flex-col gap-2">
                <label className="body-2 font-bold text-white">
                  Schema Name
                </label>
                <div className="relative">
                  <select
                    value={selectedSchema}
                    onChange={(e) => setSelectedSchema(e.target.value)}
                    disabled={
                      !selectedCollection ||
                      loadingSchemas ||
                      schemas.length === 0
                    }
                    className="w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10"
                    style={{
                      background: 'rgb(23,23,23)',
                      border: '1px solid rgba(0,255,136,0.25)',
                      opacity:
                        !selectedCollection ||
                        loadingSchemas ||
                        schemas.length === 0
                          ? 0.5
                          : 1,
                    }}
                  >
                    {!selectedCollection ? (
                      <option value="">Select collection first</option>
                    ) : loadingSchemas ? (
                      <option value="">Loading schemas...</option>
                    ) : schemas.length === 0 ? (
                      <option value="">No schemas found</option>
                    ) : (
                      <>
                        <option value="">Select schema...</option>
                        {schemas.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {loadingSchemas ? (
                      <CircleNotch
                        size={16}
                        className="animate-spin"
                        style={{ color: '#00ff88' }}
                      />
                    ) : (
                      <span className="text-neutral-500 text-xs">▼</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Template dropdown */}
              <div className="flex flex-col gap-2">
                <label className="body-2 font-bold text-white">
                  Template ID
                </label>
                <div className="relative">
                  <select
                    value={selectedTemplateId}
                    onChange={(e) => setSelectedTemplateId(e.target.value)}
                    disabled={
                      !selectedSchema ||
                      loadingTemplates ||
                      templates.length === 0
                    }
                    className="w-full px-4 py-3 rounded-xl text-white text-sm appearance-none cursor-pointer pr-10"
                    style={{
                      background: 'rgb(23,23,23)',
                      border: '1px solid rgba(0,255,136,0.25)',
                      opacity:
                        !selectedSchema ||
                        loadingTemplates ||
                        templates.length === 0
                          ? 0.5
                          : 1,
                    }}
                  >
                    {!selectedSchema ? (
                      <option value="">Select schema first</option>
                    ) : loadingTemplates ? (
                      <option value="">Loading templates...</option>
                    ) : templates.length === 0 ? (
                      <option value="">No templates found</option>
                    ) : (
                      <>
                        <option value="">Select template...</option>
                        {templates.map((t) => (
                          <option key={t.template_id} value={t.template_id}>
                            {t.name} (#{t.template_id})
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    {loadingTemplates ? (
                      <CircleNotch
                        size={16}
                        className="animate-spin"
                        style={{ color: '#00ff88' }}
                      />
                    ) : (
                      <span className="text-neutral-500 text-xs">▼</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div
              className="rounded-xl p-4 mb-6"
              style={{
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.12)',
              }}
            >
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Token</div>
                  <div className="font-semibold" style={{ color: '#00ff88' }}>
                    {selectedToken.symbol}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Recipients
                  </div>
                  <div className="font-semibold text-white">
                    {selectedAccounts.size}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Collection
                  </div>
                  <div className="font-semibold text-white font-mono">
                    {selectedCollection || '—'}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Schema</div>
                  <div className="font-semibold text-white font-mono">
                    {selectedSchema || '—'}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Template ID
                  </div>
                  <div className="font-semibold text-white font-mono">
                    #{selectedTemplateId || '—'}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Transactions
                  </div>
                  <div className="font-semibold text-white">
                    {Math.ceil(selectedAccounts.size / 50)}
                    <span className="text-neutral-500 font-normal">
                      {' '}
                      (50/batch)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
              disabled={
                !selectedCollection ||
                !selectedSchema ||
                !selectedTemplateId ||
                submitting
              }
              onClick={handleAirdrop}
              style={{
                background:
                  !selectedTemplateId || submitting
                    ? 'rgba(0,255,136,0.05)'
                    : 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))',
                border:
                  !selectedTemplateId || submitting
                    ? '1px solid rgba(0,255,136,0.1)'
                    : '1px solid rgba(0,255,136,0.4)',
                color:
                  !selectedTemplateId || submitting
                    ? 'rgba(0,255,136,0.3)'
                    : '#00ff88',
                boxShadow:
                  !selectedTemplateId || submitting
                    ? 'none'
                    : '0 0 20px rgba(0,255,136,0.15)',
                cursor:
                  !selectedTemplateId || submitting ? 'not-allowed' : 'pointer',
              }}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <CircleNotch size={18} className="animate-spin" />
                  Airdropping to {selectedAccounts.size} holders...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Coins size={18} />
                  Airdrop NFT to {selectedAccounts.size} holders
                </span>
              )}
            </button>
          </div>
        )}

        <Modal ref={modalRef} title={modal.title}>
          <p className="body-2 mt-2 text-neutral-300">{modal.message}</p>
          {modal.details && (
            <pre
              className="mt-4 p-3 rounded-lg text-xs font-mono overflow-auto max-h-40 text-red-400"
              style={{
                background: 'rgba(255,0,0,0.05)',
                border: '1px solid rgba(255,0,0,0.1)',
              }}
            >
              {modal.details}
            </pre>
          )}
          {modal.transactionsIDs?.map((tx) => (
            <Link
              className="flex py-2 underline underline-offset-2"
              key={tx}
              href={`https://explorer.xprnetwork.org/transaction/${tx}`}
              target="_blank"
              style={{ color: '#00ff88' }}
            >
              <span className="break-all font-mono text-sm">{tx}</span>
            </Link>
          ))}
        </Modal>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${pluginInfo.name} - ${appName}`}</title>
      </Head>
      <div className="mx-auto my-14 text-center">
        <h2 className="headline-2">Connect your wallet</h2>
        <p className="body-1 mt-2 mb-6 text-neutral-400">
          You need to connect your wallet to use Token Airdrop
        </p>
        <button type="button" className="btn" onClick={handleLogin}>
          Connect Wallet
        </button>
      </div>
    </>
  );
}

export default withUAL(TokenAirdrop);
