import { useState, useRef, useEffect, useMemo } from 'react';
import { withUAL } from '@libs/ual-compat';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import {
  CircleNotch,
  PaperPlaneTilt,
  MagnifyingGlass,
  CheckSquare,
  Square,
  Coins,
  ArrowsClockwise,
  ListBullets,
  UsersFour,
  Check,
  WarningCircle,
  DownloadSimple,
  Scales,
  Equals,
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

const RPC_URL = 'https://api.protonnz.com';

interface UserToken {
  symbol: string;
  precision: number;
  balance: string;
  amount: number;
}

interface TxRecord {
  accounts: string[];
  amounts: number[];
  txId: string;
}

type RecipientMode = 'manual' | 'simpledex';
type SendMode = 'equal' | 'proportional';

function SendTokens({ ual }: { ual: any }) {
  const modalRef = useRef<any>(null);
  const confirmRef = useRef<any>(null);
  const router = useRouter();
  const { chainKey } = router.query;

  // User token balances
  const [userTokens, setUserTokens] = useState<UserToken[]>([]);
  const [loadingBalances, setLoadingBalances] = useState(false);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState<UserToken | null>(null);

  // Recipient mode
  const [recipientMode, setRecipientMode] = useState<RecipientMode>('manual');

  // Send mode
  const [sendMode, setSendMode] = useState<SendMode>('equal');

  // Manual recipients
  const [manualInput, setManualInput] = useState('');

  // SimpleDEX recipients
  const [dexTokens, setDexTokens] = useState<SimpleDexToken[]>([]);
  const [loadingDexTokens, setLoadingDexTokens] = useState(false);
  const [dexTokenError, setDexTokenError] = useState<string | null>(null);
  const [selectedDexToken, setSelectedDexToken] =
    useState<SimpleDexToken | null>(null);
  const [dexHolders, setDexHolders] = useState<TokenHolder[]>([]);
  const [loadingHolders, setLoadingHolders] = useState(false);
  const [holderError, setHolderError] = useState<string | null>(null);
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(
    new Set()
  );
  const [holderSearch, setHolderSearch] = useState('');
  const [dexTokenSearch, setDexTokenSearch] = useState('');

  // Amount & sending
  const [amountPerRecipient, setAmountPerRecipient] = useState('');
  const [totalAirdropAmount, setTotalAirdropAmount] = useState('');
  const [memo, setMemo] = useState('Airdrop from XPR NFT Creator');
  const [submitting, setSubmitting] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });

  // Transaction history
  const [txHistory, setTxHistory] = useState<TxRecord[]>([]);

  // Result state for modal
  const [modalState, setModalState] = useState<{
    title: string;
    message?: string;
    isSuccess?: boolean;
    txRecords?: TxRecord[];
  }>({ title: '' });

  const chainIdLogged =
    ual?.activeUser?.chainId ?? ual?.activeUser?.chain?.chainId;
  const chainId = chainsConfig[chainKey as string]?.chainId;
  const accountName = ual?.activeUser?.accountName;

  async function fetchUserBalances() {
    if (!accountName) return;
    setLoadingBalances(true);
    setBalanceError(null);
    try {
      const res = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: 'simpletoken',
          scope: accountName,
          table: 'accounts',
          json: true,
          limit: 100,
        }),
      });
      const data = await res.json();
      const tokens: UserToken[] = (data.rows || []).map((row: any) => {
        const parts = row.balance.split(' ');
        const amountStr = parts[0];
        const symbol = parts[1];
        const precision = amountStr.includes('.')
          ? amountStr.split('.')[1].length
          : 0;
        return {
          symbol,
          precision,
          balance: row.balance,
          amount: parseFloat(amountStr),
        };
      });
      setUserTokens(tokens.filter((t) => t.amount > 0));
    } catch (err) {
      console.error('Failed to fetch balances:', err);
      setUserTokens([]);
      setBalanceError(
        'Could not load your token balances. Please check your connection and retry.'
      );
    }
    setLoadingBalances(false);
  }

  async function fetchDexTokens() {
    setLoadingDexTokens(true);
    setDexTokenError(null);
    try {
      const data = await getSimpleDexTokens();
      setDexTokens(data);
    } catch {
      setDexTokens([]);
      setDexTokenError(
        'Unable to load SimpleDEX token list. Please try again.'
      );
    }
    setLoadingDexTokens(false);
  }

  async function fetchHolders(token: SimpleDexToken) {
    setLoadingHolders(true);
    setDexHolders([]);
    setSelectedAccounts(new Set());
    setHolderError(null);
    try {
      const data = await getTokenHolders(token.tokenId);
      const filtered = data.filter((h) => h.account !== accountName);
      setDexHolders(filtered);
      setSelectedAccounts(new Set(filtered.map((h) => h.account)));
    } catch {
      setDexHolders([]);
      setHolderError(
        `Could not load holders for ${token.symbol}. Please try again.`
      );
    }
    setLoadingHolders(false);
  }

  useEffect(() => {
    if (chainId && chainIdLogged && chainId === chainIdLogged && accountName) {
      fetchUserBalances();
    }
  }, [chainId, chainIdLogged, accountName]);

  const manualRecipients = useMemo(() => {
    if (!manualInput.trim()) return [];
    return manualInput
      .split(/[\n,]+/)
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 0 && s.length <= 12);
  }, [manualInput]);

  const activeRecipients = useMemo(() => {
    if (recipientMode === 'manual') return manualRecipients;
    return Array.from(selectedAccounts);
  }, [recipientMode, manualRecipients, selectedAccounts]);

  // For proportional mode: map account -> their holder amount
  const holderAmountMap = useMemo(() => {
    const map = new Map<string, number>();
    dexHolders.forEach((h) => map.set(h.account, h.amount));
    return map;
  }, [dexHolders]);

  const filteredHolders = useMemo(
    () =>
      dexHolders.filter((h) =>
        h.account.toLowerCase().includes(holderSearch.toLowerCase())
      ),
    [dexHolders, holderSearch]
  );

  const filteredDexTokens = useMemo(
    () =>
      dexTokens.filter(
        (t) =>
          t.name?.toLowerCase().includes(dexTokenSearch.toLowerCase()) ||
          t.symbol?.toLowerCase().includes(dexTokenSearch.toLowerCase())
      ),
    [dexTokens, dexTokenSearch]
  );

  function formatQuantity(amount: number, token: UserToken): string {
    return `${amount.toFixed(token.precision)} ${token.symbol}`;
  }

  // Calculate amounts per account
  const amountMap = useMemo((): Map<string, number> => {
    const result = new Map<string, number>();
    if (!selectedToken || activeRecipients.length === 0) return result;

    if (sendMode === 'equal') {
      const amt = parseFloat(amountPerRecipient) || 0;
      activeRecipients.forEach((acc) => result.set(acc, amt));
    } else {
      // Proportional: distribute totalAirdropAmount based on holder balances
      const total = parseFloat(totalAirdropAmount) || 0;
      const totalHoldings = activeRecipients.reduce(
        (sum, acc) => sum + (holderAmountMap.get(acc) || 1),
        0
      );
      activeRecipients.forEach((acc) => {
        const share = (holderAmountMap.get(acc) || 1) / totalHoldings;
        const amt = parseFloat(
          (total * share).toFixed(selectedToken.precision)
        );
        result.set(acc, amt);
      });
    }
    return result;
  }, [
    sendMode,
    activeRecipients,
    amountPerRecipient,
    totalAirdropAmount,
    holderAmountMap,
    selectedToken,
  ]);

  const totalAmount = useMemo(() => {
    let sum = 0;
    amountMap.forEach((v) => (sum += v));
    return sum;
  }, [amountMap]);

  const hasEnoughBalance = selectedToken
    ? totalAmount <= selectedToken.amount
    : false;
  const batchCount = Math.ceil(activeRecipients.length / 50);

  function toggleHolder(account: string) {
    setSelectedAccounts((prev) => {
      const next = new Set(prev);
      if (next.has(account)) next.delete(account);
      else next.add(account);
      return next;
    });
  }

  function exportCSV(records: TxRecord[]) {
    const rows = ['account,amount,txId'];
    records.forEach((rec) => {
      rec.accounts.forEach((acc, i) => {
        rows.push(`${acc},${rec.amounts[i] ?? ''},${rec.txId}`);
      });
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `airdrop-${
      selectedToken?.symbol ?? 'tokens'
    }-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleSend() {
    if (!selectedToken || activeRecipients.length === 0 || !ual?.activeUser)
      return;

    setSubmitting(true);
    const newTxRecords: TxRecord[] = [];
    const batchSize = 50;
    const totalBatches = Math.ceil(activeRecipients.length / batchSize);
    setBatchProgress({ current: 0, total: totalBatches });

    try {
      for (let i = 0; i < activeRecipients.length; i += batchSize) {
        const batchAccounts = activeRecipients.slice(i, i + batchSize);
        const batchAmounts = batchAccounts.map(
          (acc) => amountMap.get(acc) ?? 0
        );

        const actions = batchAccounts.map((account, idx) => ({
          account: 'simpletoken',
          name: 'transfer',
          authorization: [{ actor: accountName, permission: 'active' }],
          data: {
            from: accountName,
            to: account,
            quantity: formatQuantity(batchAmounts[idx], selectedToken),
            memo,
          },
        }));

        const result = await ual.activeUser.signTransaction(
          { actions },
          { blocksBehind: 3, expireSeconds: 60 }
        );

        const txId = result.transactionId || '';
        newTxRecords.push({
          accounts: batchAccounts,
          amounts: batchAmounts,
          txId,
        });
        setBatchProgress({
          current: Math.floor(i / batchSize) + 1,
          total: totalBatches,
        });
      }

      setTxHistory((prev) => [...prev, ...newTxRecords]);
      setModalState({
        title: 'Airdrop Successful!',
        message: `Sent ${selectedToken.symbol} to ${
          activeRecipients.length
        } accounts across ${
          newTxRecords.length
        } transaction(s). Total: ${formatQuantity(totalAmount, selectedToken)}`,
        isSuccess: true,
        txRecords: newTxRecords,
      });
      modalRef.current?.openModal();
      fetchUserBalances();
    } catch (error: any) {
      setModalState({
        title: 'Airdrop Failed',
        message:
          error?.cause?.json?.error?.details?.[0]?.message ||
          error?.message ||
          'Something went wrong. Please try again.',
        isSuccess: false,
        txRecords: newTxRecords.length > 0 ? newTxRecords : undefined,
      });
      modalRef.current?.openModal();
      if (newTxRecords.length > 0) {
        setTxHistory((prev) => [...prev, ...newTxRecords]);
      }
    }
    setSubmitting(false);
    setBatchProgress({ current: 0, total: 0 });
  }

  function handleLogin() {
    ual?.showModal();
  }

  // Confirmation dialog content
  const confirmMessage = selectedToken
    ? `You are about to send ${
        sendMode === 'equal'
          ? `${amountPerRecipient} ${selectedToken.symbol} each`
          : `${formatQuantity(totalAmount, selectedToken)} proportionally`
      } to ${activeRecipients.length} account${
        activeRecipients.length !== 1 ? 's' : ''
      }. Total: ${formatQuantity(totalAmount, selectedToken)}. Continue?`
    : '';

  if (chainId && chainIdLogged && chainId === chainIdLogged) {
    return (
      <div className="container flex flex-col gap-8 pb-16">
        <Head>
          <title>{`Send Tokens - ${appName}`}</title>
        </Head>

        {/* Header */}
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
            <PaperPlaneTilt size={32} style={{ color: '#00ff88' }} />
          </div>
          <div>
            <h1
              className="headline-1"
              style={{
                color: '#00ff88',
                textShadow: '0 0 20px rgba(0,255,136,0.5)',
              }}
            >
              Send Tokens
            </h1>
            <span className="body-1 text-neutral-400">
              Send fungible tokens to multiple accounts at once
            </span>
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
          <div className="flex items-center justify-between mb-4">
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
            </h2>
            <button
              type="button"
              onClick={fetchUserBalances}
              disabled={loadingBalances}
              title="Refresh balances"
              style={{ color: '#00ff88', opacity: 0.7 }}
              className="hover:opacity-100 transition-opacity"
            >
              <ArrowsClockwise
                size={20}
                className={loadingBalances ? 'animate-spin' : ''}
              />
            </button>
          </div>

          {balanceError && (
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4"
              style={{
                background: 'rgba(255,77,77,0.08)',
                border: '1px solid rgba(255,77,77,0.25)',
              }}
            >
              <WarningCircle
                size={18}
                style={{ color: '#ff4d4d', flexShrink: 0 }}
              />
              <span className="text-sm" style={{ color: '#ff4d4d' }}>
                {balanceError}
              </span>
              <button
                type="button"
                onClick={fetchUserBalances}
                className="ml-auto text-xs underline"
                style={{ color: '#ff4d4d' }}
              >
                Retry
              </button>
            </div>
          )}

          {loadingBalances ? (
            <div
              className="flex items-center justify-center gap-3 py-12"
              style={{ color: '#00ff88' }}
            >
              <div className="matrix-spinner">
                <div className="matrix-spinner-outer" />
                <div className="matrix-spinner-inner" />
                <div className="matrix-spinner-dot" />
              </div>
              <span className="text-sm">Loading your token balances...</span>
            </div>
          ) : userTokens.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No simpletoken balances found for {accountName}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {userTokens.map((token) => {
                const isSelected = selectedToken?.symbol === token.symbol;
                return (
                  <button
                    key={token.symbol}
                    type="button"
                    onClick={() => setSelectedToken(token)}
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
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold mb-2"
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
                      <Coins size={18} />
                    </div>
                    <div
                      className="font-bold text-sm truncate"
                      style={{ color: isSelected ? '#00ff88' : '#fff' }}
                    >
                      {token.symbol}
                    </div>
                    <div className="text-xs text-neutral-500 font-mono mt-1">
                      {token.balance}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Step 2: Recipients */}
        {selectedToken && (
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,136,0.15)',
              boxShadow: '0 0 30px rgba(0,255,136,0.05)',
            }}
          >
            <h2 className="headline-3 flex items-center gap-3 mb-4">
              <span
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0,255,136,0.6)',
                }}
              >
                02
              </span>
              <span className="text-white">Choose Recipients</span>
            </h2>

            {/* Mode toggle */}
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setRecipientMode('manual')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background:
                    recipientMode === 'manual'
                      ? 'rgba(0,255,136,0.1)'
                      : 'rgba(255,255,255,0.03)',
                  border:
                    recipientMode === 'manual'
                      ? '1px solid rgba(0,255,136,0.4)'
                      : '1px solid rgba(255,255,255,0.08)',
                  color: recipientMode === 'manual' ? '#00ff88' : '#888',
                }}
              >
                <ListBullets size={18} />
                Manual List
              </button>
              <button
                type="button"
                onClick={() => {
                  setRecipientMode('simpledex');
                  if (dexTokens.length === 0) fetchDexTokens();
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background:
                    recipientMode === 'simpledex'
                      ? 'rgba(0,255,136,0.1)'
                      : 'rgba(255,255,255,0.03)',
                  border:
                    recipientMode === 'simpledex'
                      ? '1px solid rgba(0,255,136,0.4)'
                      : '1px solid rgba(255,255,255,0.08)',
                  color: recipientMode === 'simpledex' ? '#00ff88' : '#888',
                }}
              >
                <UsersFour size={18} />
                From SimpleDEX Holders
              </button>
            </div>

            {/* Manual mode */}
            {recipientMode === 'manual' && (
              <div>
                <label className="text-sm font-bold text-white mb-2 block">
                  Paste account names (one per line or comma-separated)
                </label>
                <textarea
                  value={manualInput}
                  onChange={(e) => setManualInput(e.target.value)}
                  rows={6}
                  placeholder={
                    'account1\naccount2\naccount3\n\nor: account1, account2, account3'
                  }
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none resize-y font-mono"
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(0,255,136,0.2)',
                  }}
                />
                {manualRecipients.length > 0 && (
                  <div className="mt-2 text-xs text-neutral-400">
                    <span
                      style={{ color: '#00ff88' }}
                      className="font-mono font-bold"
                    >
                      {manualRecipients.length}
                    </span>{' '}
                    recipient{manualRecipients.length !== 1 ? 's' : ''} parsed
                  </div>
                )}
              </div>
            )}

            {/* SimpleDEX mode */}
            {recipientMode === 'simpledex' && (
              <div className="flex flex-col gap-4">
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
                    placeholder="Search SimpleDEX token to use its holders..."
                    value={dexTokenSearch}
                    onChange={(e) => setDexTokenSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder-neutral-600 text-sm"
                  />
                </div>

                {dexTokenError && (
                  <div
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(255,77,77,0.08)',
                      border: '1px solid rgba(255,77,77,0.25)',
                    }}
                  >
                    <WarningCircle size={16} style={{ color: '#ff4d4d' }} />
                    <span className="text-sm" style={{ color: '#ff4d4d' }}>
                      {dexTokenError}
                    </span>
                    <button
                      type="button"
                      onClick={fetchDexTokens}
                      className="ml-auto text-xs underline"
                      style={{ color: '#ff4d4d' }}
                    >
                      Retry
                    </button>
                  </div>
                )}

                {loadingDexTokens ? (
                  <div
                    className="flex items-center justify-center gap-3 py-8"
                    style={{ color: '#00ff88' }}
                  >
                    <div className="matrix-spinner">
                      <div className="matrix-spinner-outer" />
                      <div className="matrix-spinner-inner" />
                      <div className="matrix-spinner-dot" />
                    </div>
                    <span className="text-sm">Loading SimpleDEX tokens...</span>
                  </div>
                ) : (
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 overflow-y-auto"
                    style={{ maxHeight: '240px' }}
                  >
                    {filteredDexTokens.map((token) => {
                      const isSelected =
                        selectedDexToken?.tokenId === token.tokenId;
                      return (
                        <button
                          key={token.tokenId}
                          type="button"
                          onClick={() => {
                            setSelectedDexToken(token);
                            fetchHolders(token);
                          }}
                          className="text-left rounded-lg p-3 transition-all text-xs"
                          style={{
                            background: isSelected
                              ? 'rgba(0,255,136,0.08)'
                              : 'rgba(255,255,255,0.02)',
                            border: isSelected
                              ? '1px solid rgba(0,255,136,0.5)'
                              : '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <div
                            className="font-bold truncate"
                            style={{ color: isSelected ? '#00ff88' : '#fff' }}
                          >
                            {token.symbol}
                          </div>
                          <div className="text-neutral-500 truncate">
                            {token.name}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Holder list */}
                {selectedDexToken && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white">
                          {selectedDexToken.symbol} Holders
                        </span>
                        {!loadingHolders && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-md font-mono"
                            style={{
                              background: 'rgba(0,255,136,0.1)',
                              color: '#00ff88',
                              border: '1px solid rgba(0,255,136,0.2)',
                            }}
                          >
                            {selectedAccounts.size}/{dexHolders.length}
                          </span>
                        )}
                      </div>
                      {!loadingHolders && dexHolders.length > 0 && (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedAccounts(
                                new Set(filteredHolders.map((h) => h.account))
                              )
                            }
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs"
                            style={{
                              background: 'rgba(0,255,136,0.1)',
                              border: '1px solid rgba(0,255,136,0.25)',
                              color: '#00ff88',
                            }}
                          >
                            <CheckSquare size={12} /> All
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedAccounts(new Set())}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#aaa',
                            }}
                          >
                            <Square size={12} /> None
                          </button>
                        </div>
                      )}
                    </div>

                    {holderError && (
                      <div
                        className="flex items-center gap-3 rounded-xl px-4 py-3 mb-3"
                        style={{
                          background: 'rgba(255,77,77,0.08)',
                          border: '1px solid rgba(255,77,77,0.25)',
                        }}
                      >
                        <WarningCircle size={16} style={{ color: '#ff4d4d' }} />
                        <span className="text-sm" style={{ color: '#ff4d4d' }}>
                          {holderError}
                        </span>
                        <button
                          type="button"
                          onClick={() => fetchHolders(selectedDexToken)}
                          className="ml-auto text-xs underline"
                          style={{ color: '#ff4d4d' }}
                        >
                          Retry
                        </button>
                      </div>
                    )}

                    <div
                      className="flex items-center gap-3 rounded-lg px-3 py-2 mb-3"
                      style={{
                        background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(0,255,136,0.1)',
                      }}
                    >
                      <MagnifyingGlass
                        size={14}
                        style={{ color: '#00ff88', opacity: 0.5 }}
                      />
                      <input
                        type="text"
                        placeholder="Filter holders..."
                        value={holderSearch}
                        onChange={(e) => setHolderSearch(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-white placeholder-neutral-700 text-xs"
                      />
                    </div>

                    {loadingHolders ? (
                      <div
                        className="flex items-center justify-center gap-3 py-8"
                        style={{ color: '#00ff88' }}
                      >
                        <div className="matrix-spinner">
                          <div className="matrix-spinner-outer" />
                          <div className="matrix-spinner-inner" />
                          <div className="matrix-spinner-dot" />
                        </div>
                        <span className="text-sm">Fetching holders...</span>
                      </div>
                    ) : (
                      <div
                        className="rounded-xl overflow-y-auto"
                        style={{
                          maxHeight: '280px',
                          background: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(0,255,136,0.08)',
                        }}
                      >
                        {filteredHolders.map((holder, i) => {
                          const isChecked = selectedAccounts.has(
                            holder.account
                          );
                          return (
                            <button
                              key={holder.account}
                              type="button"
                              onClick={() => toggleHolder(holder.account)}
                              className="w-full flex items-center px-3 py-2 text-xs transition-all"
                              style={{
                                background: isChecked
                                  ? 'rgba(0,255,136,0.04)'
                                  : 'transparent',
                                borderBottom:
                                  '1px solid rgba(255,255,255,0.03)',
                              }}
                            >
                              <div className="w-5 flex-shrink-0">
                                {isChecked ? (
                                  <CheckSquare
                                    size={14}
                                    style={{ color: '#00ff88' }}
                                  />
                                ) : (
                                  <Square
                                    size={14}
                                    className="text-neutral-700"
                                  />
                                )}
                              </div>
                              <div className="w-6 text-neutral-600 font-mono">
                                {i + 1}
                              </div>
                              <div
                                className="flex-1 text-left font-mono truncate"
                                style={{
                                  color: isChecked ? '#00ff88' : '#ccc',
                                }}
                              >
                                {holder.account}
                              </div>
                              <div className="text-neutral-500 font-mono">
                                {holder.amount.toLocaleString()}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Step 3: Amount & Send */}
        {selectedToken && activeRecipients.length > 0 && (
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,136,0.15)',
              boxShadow: '0 0 30px rgba(0,255,136,0.05)',
            }}
          >
            <h2 className="headline-3 flex items-center gap-3 mb-6">
              <span
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0,255,136,0.6)',
                }}
              >
                03
              </span>
              <span className="text-white">Amount & Send</span>
            </h2>

            {/* Send mode toggle */}
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setSendMode('equal')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background:
                    sendMode === 'equal'
                      ? 'rgba(0,255,136,0.1)'
                      : 'rgba(255,255,255,0.03)',
                  border:
                    sendMode === 'equal'
                      ? '1px solid rgba(0,255,136,0.4)'
                      : '1px solid rgba(255,255,255,0.08)',
                  color: sendMode === 'equal' ? '#00ff88' : '#888',
                }}
              >
                <Equals size={18} />
                Send Equal
              </button>
              <button
                type="button"
                onClick={() => setSendMode('proportional')}
                disabled={
                  recipientMode !== 'simpledex' || dexHolders.length === 0
                }
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                title={
                  recipientMode !== 'simpledex'
                    ? 'Switch to SimpleDEX Holders mode to use proportional sending'
                    : undefined
                }
                style={{
                  background:
                    sendMode === 'proportional'
                      ? 'rgba(0,255,136,0.1)'
                      : 'rgba(255,255,255,0.03)',
                  border:
                    sendMode === 'proportional'
                      ? '1px solid rgba(0,255,136,0.4)'
                      : '1px solid rgba(255,255,255,0.08)',
                  color:
                    sendMode === 'proportional'
                      ? '#00ff88'
                      : recipientMode !== 'simpledex' || dexHolders.length === 0
                      ? '#444'
                      : '#888',
                  cursor:
                    recipientMode !== 'simpledex' || dexHolders.length === 0
                      ? 'not-allowed'
                      : 'pointer',
                }}
              >
                <Scales size={18} />
                Send Proportional
              </button>
              {sendMode === 'proportional' && (
                <span className="text-xs text-neutral-500 self-center">
                  Distributes based on each holder&apos;s token balance share
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {sendMode === 'equal' ? (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white">
                    Amount per recipient
                  </label>
                  <input
                    type="number"
                    step="any"
                    min="0"
                    value={amountPerRecipient}
                    onChange={(e) => setAmountPerRecipient(e.target.value)}
                    placeholder="e.g. 1000"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none font-mono"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(0,255,136,0.2)',
                    }}
                  />
                  {parseFloat(amountPerRecipient) > 0 && (
                    <div className="text-xs text-neutral-500">
                      Will send{' '}
                      <span className="font-mono" style={{ color: '#00ff88' }}>
                        {formatQuantity(
                          parseFloat(amountPerRecipient),
                          selectedToken
                        )}
                      </span>{' '}
                      per account
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white">
                    Total amount to distribute
                  </label>
                  <input
                    type="number"
                    step="any"
                    min="0"
                    value={totalAirdropAmount}
                    onChange={(e) => setTotalAirdropAmount(e.target.value)}
                    placeholder="e.g. 100000"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none font-mono"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(0,255,136,0.2)',
                    }}
                  />
                  <div className="text-xs text-neutral-500">
                    Split proportionally by holder balance ratio
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Memo</label>
                <input
                  type="text"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="Transfer memo"
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none"
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(0,255,136,0.2)',
                  }}
                />
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
                  <div className="text-neutral-500 text-xs mb-1">Mode</div>
                  <div className="font-semibold text-white capitalize">
                    {sendMode}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Recipients
                  </div>
                  <div className="font-semibold text-white">
                    {activeRecipients.length}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Total Amount
                  </div>
                  <div
                    className="font-semibold font-mono"
                    style={{ color: hasEnoughBalance ? '#00ff88' : '#ff4d4d' }}
                  >
                    {totalAmount > 0
                      ? formatQuantity(totalAmount, selectedToken)
                      : '—'}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">
                    Your Balance
                  </div>
                  <div className="font-semibold text-white font-mono">
                    {selectedToken.balance}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Batches</div>
                  <div className="font-semibold text-white">
                    {batchCount}
                    <span className="text-neutral-500 font-normal">
                      {' '}
                      (50/batch)
                    </span>
                  </div>
                </div>
              </div>
              {totalAmount > 0 && !hasEnoughBalance && (
                <div
                  className="mt-3 text-xs font-medium px-3 py-2 rounded-lg"
                  style={{
                    background: 'rgba(255,77,77,0.08)',
                    border: '1px solid rgba(255,77,77,0.2)',
                    color: '#ff4d4d',
                  }}
                >
                  Insufficient balance. You need{' '}
                  {formatQuantity(totalAmount, selectedToken)} but have{' '}
                  {selectedToken.balance}
                </div>
              )}
            </div>

            {/* Send button */}
            <button
              type="button"
              className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
              disabled={totalAmount <= 0 || !hasEnoughBalance || submitting}
              onClick={() => confirmRef.current?.openModal()}
              style={{
                background:
                  totalAmount <= 0 || !hasEnoughBalance || submitting
                    ? 'rgba(0,255,136,0.05)'
                    : 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))',
                border:
                  totalAmount <= 0 || !hasEnoughBalance || submitting
                    ? '1px solid rgba(0,255,136,0.1)'
                    : '1px solid rgba(0,255,136,0.4)',
                color:
                  totalAmount <= 0 || !hasEnoughBalance || submitting
                    ? 'rgba(0,255,136,0.3)'
                    : '#00ff88',
                boxShadow:
                  totalAmount <= 0 || !hasEnoughBalance || submitting
                    ? 'none'
                    : '0 0 20px rgba(0,255,136,0.15)',
                cursor:
                  totalAmount <= 0 || !hasEnoughBalance || submitting
                    ? 'not-allowed'
                    : 'pointer',
              }}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <CircleNotch size={18} className="animate-spin" />
                  Sending batch {batchProgress.current}/{batchProgress.total}...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <PaperPlaneTilt size={18} />
                  Send {selectedToken.symbol} to {activeRecipients.length}{' '}
                  accounts
                </span>
              )}
            </button>
          </div>
        )}

        {/* Transaction History */}
        {txHistory.length > 0 && (
          <div
            className="rounded-2xl p-4 sm:p-6"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,136,0.15)',
              boxShadow: '0 0 30px rgba(0,255,136,0.05)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="headline-3 flex items-center gap-3">
                <span
                  style={{
                    color: '#00ff88',
                    textShadow: '0 0 10px rgba(0,255,136,0.6)',
                  }}
                >
                  ✓
                </span>
                <span className="text-white">Transaction History</span>
              </h2>
              <button
                type="button"
                onClick={() => exportCSV(txHistory)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.25)',
                  color: '#00ff88',
                }}
              >
                <DownloadSimple size={16} />
                Export CSV
              </button>
            </div>

            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(0,255,136,0.08)',
              }}
            >
              <div
                className="grid grid-cols-3 px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  borderBottom: '1px solid rgba(0,255,136,0.1)',
                  color: 'rgba(0,255,136,0.5)',
                }}
              >
                <div>Accounts</div>
                <div className="text-center">Amounts</div>
                <div className="text-right">Transaction</div>
              </div>
              {txHistory.map((rec, i) => (
                <div
                  key={rec.txId + i}
                  className="grid grid-cols-3 px-4 py-3 text-xs"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                >
                  <div className="font-mono text-neutral-400">
                    {rec.accounts.length} accounts
                  </div>
                  <div
                    className="text-center font-mono"
                    style={{ color: '#00ff88' }}
                  >
                    {rec.amounts.reduce((a, b) => a + b, 0).toFixed(2)}{' '}
                    {selectedToken?.symbol}
                  </div>
                  <div className="text-right">
                    {rec.txId ? (
                      <Link
                        href={`https://explorer.xprnetwork.org/transaction/${rec.txId}`}
                        target="_blank"
                        className="underline underline-offset-2 font-mono"
                        style={{ color: '#00ff88', fontSize: '0.7rem' }}
                      >
                        {rec.txId.slice(0, 16)}...
                      </Link>
                    ) : (
                      <span className="text-neutral-600">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        <Modal ref={confirmRef} title="Confirm Airdrop">
          <p className="body-2 mt-3 text-neutral-300">{confirmMessage}</p>
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                confirmRef.current?.closeModal();
                handleSend();
              }}
              className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))',
                border: '1px solid rgba(0,255,136,0.4)',
                color: '#00ff88',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Check size={16} />
                Yes, Send
              </span>
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
          {modalState.isSuccess ? (
            <div className="flex items-center gap-2 mt-2 mb-3">
              <Check size={20} style={{ color: '#00ff88' }} />
              <span
                className="text-sm font-medium"
                style={{ color: '#00ff88' }}
              >
                Success
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 mt-2 mb-3">
              <WarningCircle size={20} style={{ color: '#ff4d4d' }} />
              <span
                className="text-sm font-medium"
                style={{ color: '#ff4d4d' }}
              >
                Error
              </span>
            </div>
          )}
          <p className="body-2 text-neutral-300">{modalState.message}</p>
          {modalState.txRecords && modalState.txRecords.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                  Transactions ({modalState.txRecords.length})
                </p>
                <button
                  type="button"
                  onClick={() => exportCSV(modalState.txRecords!)}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs"
                  style={{
                    background: 'rgba(0,255,136,0.08)',
                    border: '1px solid rgba(0,255,136,0.2)',
                    color: '#00ff88',
                  }}
                >
                  <DownloadSimple size={12} />
                  Export CSV
                </button>
              </div>
              {modalState.txRecords.map((rec) => (
                <Link
                  className="flex py-2 underline underline-offset-2"
                  key={rec.txId}
                  href={`https://explorer.xprnetwork.org/transaction/${rec.txId}`}
                  target="_blank"
                  style={{ color: '#00ff88' }}
                >
                  <span className="break-all font-mono text-sm">
                    {rec.txId}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Modal>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`Send Tokens - ${appName}`}</title>
      </Head>
      <div className="mx-auto my-14 text-center">
        <h2 className="headline-2">Connect your wallet</h2>
        <p className="body-1 mt-2 mb-6 text-neutral-400">
          You need to connect your wallet to send tokens
        </p>
        <button type="button" className="btn" onClick={handleLogin}>
          Connect Wallet
        </button>
      </div>
    </>
  );
}

export default withUAL(SendTokens);
