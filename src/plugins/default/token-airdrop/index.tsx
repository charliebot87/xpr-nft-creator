import { useState, useRef, useEffect } from 'react';
import { withUAL } from 'ual-reactjs-renderer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { CircleNotch, Coins, MagnifyingGlass, Users } from 'phosphor-react';

import { useForm } from 'react-hook-form';

import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { Select } from '@components/Select';

import * as chainsConfig from '@configs/chainsConfig';
import { appName } from '@configs/globalsConfig';

import { pluginInfo } from './config';

const INDEXER_BASE = 'https://indexer.protonnz.com';

interface TokenInfo {
  id: string;
  name: string;
  symbol: string;
  supply: string;
  logo?: string;
  contract: string;
}

interface HolderInfo {
  account: string;
  balance: string;
}

interface TokenAirdropProps {
  ual: any;
}

interface ModalState {
  title: string;
  message?: string;
  details?: string;
  transactionsIDs?: string[];
}

function TokenAirdrop({ ual }: TokenAirdropProps) {
  const modalRef = useRef(null);
  const router = useRouter();
  const { chainKey } = router.query;

  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
  const [holders, setHolders] = useState<HolderInfo[]>([]);
  const [loadingTokens, setLoadingTokens] = useState(false);
  const [loadingHolders, setLoadingHolders] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [tokenSearch, setTokenSearch] = useState('');
  const [modal, setModal] = useState<ModalState>({ title: '' });

  const chainIdLogged =
    ual?.activeUser?.chainId ?? ual?.activeUser?.chain?.chainId;
  const chainId = chainsConfig[chainKey as string]?.chainId;

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchTemplateID = watch('templateID');

  // Fetch tokens from SimpleDEX indexer
  async function fetchTokens() {
    setLoadingTokens(true);
    try {
      const res = await fetch(
        `${INDEXER_BASE}/api/tokens?contract=simpletoken&limit=100`
      );
      if (!res.ok) throw new Error('Failed to fetch tokens');
      const data = await res.json();
      setTokens(data.tokens || data.data || data || []);
    } catch (err) {
      // Fallback: show manual entry
      console.error('Token fetch error:', err);
      setTokens([]);
    }
    setLoadingTokens(false);
  }

  // Fetch holders for a specific token
  async function fetchHolders(tokenId: string) {
    setLoadingHolders(true);
    setHolders([]);
    try {
      const res = await fetch(
        `${INDEXER_BASE}/api/tokens/${tokenId}/holders?limit=1000`
      );
      if (!res.ok) throw new Error('Failed to fetch holders');
      const data = await res.json();
      setHolders(data.holders || data.data || data || []);
    } catch (err) {
      console.error('Holder fetch error:', err);
      // If the API shape is different, try alternatives
      try {
        const res2 = await fetch(
          `${INDEXER_BASE}/api/tokens/${tokenId}/accounts?limit=1000`
        );
        if (res2.ok) {
          const data2 = await res2.json();
          setHolders(data2.accounts || data2.data || data2 || []);
        }
      } catch {
        setHolders([]);
      }
    }
    setLoadingHolders(false);
  }

  useEffect(() => {
    if (chainId && chainIdLogged && chainId === chainIdLogged) {
      fetchTokens();
    }
  }, [chainId, chainIdLogged]);

  async function handleAirdrop() {
    if (!watchTemplateID || holders.length === 0 || !ual?.activeUser) return;

    setSubmitting(true);
    try {
      const holderAccounts = holders.map((h) => h.account);

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
          collection_name: watch('collectionName') || '',
          schema_name: watch('schemaName') || '',
          template_id: parseInt(watchTemplateID),
          new_asset_owner: account,
          immutable_data: [],
          mutable_data: [],
          tokens_to_back: [],
        },
      }));

      // Batch in groups of 50
      const batchSize = 50;
      const transactionsIDs = [];

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
    const filteredTokens = tokens.filter(
      (t) =>
        t.name?.toLowerCase().includes(tokenSearch.toLowerCase()) ||
        t.symbol?.toLowerCase().includes(tokenSearch.toLowerCase())
    );

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
                background: 'linear-gradient(135deg, #9945FF, #7733CC)',
              }}
            >
              <Coins size={32} color="#fff" />
            </div>
            <div>
              <h1 className="headline-1 neon-text">{pluginInfo.name}</h1>
              <span className="body-1 text-neutral-400">
                Airdrop NFTs to SimpleDEX token holders
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: Select Token */}
        <div className="glass-card p-8">
          <h2 className="headline-3 mb-6 flex items-center gap-3">
            <span className="neon-text">01</span>
            <span>Select Token</span>
          </h2>

          <div className="mb-6">
            <Input
              icon={<MagnifyingGlass size={20} />}
              type="text"
              placeholder="Search tokens..."
              onChange={(e) => setTokenSearch(e.target.value)}
            />
          </div>

          {loadingTokens ? (
            <div className="flex items-center gap-3 text-neon">
              <CircleNotch size={24} className="animate-spin" />
              <span>Loading tokens from SimpleDEX...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {filteredTokens.length > 0 ? (
                filteredTokens.map((token) => (
                  <button
                    key={token.id || token.symbol}
                    type="button"
                    onClick={() => {
                      setSelectedToken(token);
                      fetchHolders(token.id || token.symbol);
                    }}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                      selectedToken?.id === token.id
                        ? 'border-neon bg-neon/10 shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                        : 'border-neutral-800 bg-neutral-900/50 hover:border-neon/30 hover:bg-neutral-900'
                    }`}
                  >
                    <div className="font-bold text-lg">
                      {token.symbol || token.name}
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">
                      {token.name}
                    </div>
                    {token.supply && (
                      <div className="text-xs text-neutral-500 mt-2">
                        Supply: {token.supply}
                      </div>
                    )}
                  </button>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <Input
                    {...register('tokenId')}
                    type="text"
                    label="Token ID (manual entry)"
                    placeholder="Enter token ID or symbol"
                  />
                  <button
                    type="button"
                    className="btn mt-4"
                    onClick={() => {
                      const id = watch('tokenId');
                      if (id) {
                        setSelectedToken({
                          id,
                          name: id,
                          symbol: id,
                          supply: '',
                          contract: 'simpletoken',
                        });
                        fetchHolders(id);
                      }
                    }}
                  >
                    Fetch Holders
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Step 2: Holder List */}
        {selectedToken && (
          <div className="glass-card p-8">
            <h2 className="headline-3 mb-6 flex items-center gap-3">
              <span className="neon-text-purple" style={{ color: '#9945FF' }}>
                02
              </span>
              <span>Token Holders</span>
              {holders.length > 0 && (
                <span className="badge-medium">{holders.length} holders</span>
              )}
            </h2>

            {loadingHolders ? (
              <div className="flex items-center gap-3 text-neon">
                <CircleNotch size={24} className="animate-spin" />
                <span>Fetching holder list...</span>
              </div>
            ) : holders.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-neon" />
                  <span className="body-1">
                    <strong className="neon-text">{holders.length}</strong>{' '}
                    accounts hold{' '}
                    <strong>
                      {selectedToken.symbol || selectedToken.name}
                    </strong>
                  </span>
                </div>
                <div
                  className="rounded-xl p-4 max-h-60 overflow-y-auto font-mono text-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(0, 255, 136, 0.08)',
                  }}
                >
                  {holders.map((holder, i) => (
                    <div
                      key={holder.account}
                      className="flex justify-between py-1.5 border-b border-neutral-800/50 last:border-0"
                    >
                      <span className="text-neon/80">{holder.account}</span>
                      <span className="text-neutral-500">{holder.balance}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-neutral-400">
                No holders found for this token.
              </p>
            )}
          </div>
        )}

        {/* Step 3: Configure Airdrop */}
        {holders.length > 0 && (
          <div className="glass-card p-8">
            <h2 className="headline-3 mb-6 flex items-center gap-3">
              <span className="neon-text">03</span>
              <span>Configure Airdrop</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                {...register('collectionName')}
                type="text"
                label="Collection Name"
                placeholder="e.g. mycollection"
              />
              <Input
                {...register('schemaName')}
                type="text"
                label="Schema Name"
                placeholder="e.g. myschema"
              />
              <Input
                {...register('templateID')}
                type="text"
                label="Template ID"
                placeholder="e.g. 12345"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                className="btn btn-primary"
                disabled={!watchTemplateID || submitting}
                onClick={handleAirdrop}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <CircleNotch size={20} className="animate-spin" />
                    Airdropping...
                  </span>
                ) : (
                  `Airdrop to ${holders.length} holders`
                )}
              </button>
              <span className="text-sm text-neutral-500">
                Will mint 1 NFT per holder from template #
                {watchTemplateID || '?'}
              </span>
            </div>
          </div>
        )}

        <Modal ref={modalRef} title={modal.title}>
          <p className="body-2 mt-2">{modal.message}</p>
          {modal.transactionsIDs?.map((tx) => (
            <Link
              className="flex py-2 underline underline-offset-2 text-neon"
              key={tx}
              href={`https://explorer.xprnetwork.org/transaction/${tx}`}
              target="_blank"
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
