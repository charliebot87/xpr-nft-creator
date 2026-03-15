import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { withUAL } from '@libs/ual-compat';
import {
  MagnifyingGlass,
  Plus,
  PaperPlaneTilt,
  Coins,
  Stack,
  ArrowRight,
  Wallet,
} from 'phosphor-react';

import { ipfsEndpoint } from '@configs/globalsConfig';
import { listCollectionsService } from '@services/collection/listCollectionsService';

import { Card } from '@components/Card';
import { CardContainer } from '@components/CardContainer';
import { SeeMoreButton } from '@components/SeeMoreButton';
import { Input } from '@components/Input';
import { CreateNewItem } from '@components/collection/CreateNewItem';
import { Loading } from '@components/Loading';
import { Header } from '@components/Header';

interface UserCollectionsListComponentProps {
  chainKey: string;
  ual: {
    activeUser: {
      accountName: string;
    };
    showModal: () => void;
  };
}

const actionCards = [
  {
    title: 'Create NFT Collection',
    description:
      'Set up a new collection with schemas, templates, and mint NFTs.',
    href: (chainKey: string) => `/${chainKey}/collection/new`,
    icon: Plus,
    gradient: 'from-green-500/20 to-emerald-500/5',
  },
  {
    title: 'Airdrop NFTs',
    description:
      'Bulk send NFTs to holders of a collection or specific templates.',
    href: (chainKey: string) => `/${chainKey}/plugins/airdrop?type=default`,
    icon: PaperPlaneTilt,
    gradient: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    title: 'Token Holder Airdrop',
    description:
      'Mint & airdrop NFTs to SimpleDEX token holders automatically.',
    href: (chainKey: string) =>
      `/${chainKey}/plugins/token-airdrop?type=default`,
    icon: Coins,
    gradient: 'from-purple-500/20 to-pink-500/5',
  },
];

function ActionCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
}) {
  return (
    <Link href={href} className="block group">
      <div
        className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 255, 136, 0.12)',
        }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow:
              '0 0 40px rgba(0, 255, 136, 0.12), inset 0 0 40px rgba(0, 255, 136, 0.03)',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            borderRadius: 'inherit',
          }}
        />

        <div className="relative z-10">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,100,0.05))',
              border: '1px solid rgba(0,255,136,0.2)',
              boxShadow: '0 0 20px rgba(0,255,136,0.08)',
            }}
          >
            <Icon size={28} style={{ color: '#00ff88' }} weight="duotone" />
          </div>

          <h3
            className="text-xl font-bold mb-2 transition-colors duration-300"
            style={{ color: '#fff' }}
          >
            {title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            {description}
          </p>

          <div
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
            style={{ color: '#00ff88' }}
          >
            Get started
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

function UserCollectionsListComponent({
  chainKey,
  ual,
}: UserCollectionsListComponentProps) {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [match, setMatch] = useState('');
  const [waitToSearch, setWaitToSearch] = useState(null);

  const limit = 12;
  const currentPage = Math.ceil(collections.length / limit) || 1;
  const offset = (currentPage - 1) * limit;
  const isEndOfList = collections.length % limit > 0;

  const author = ual?.activeUser?.accountName;

  const handleLoadCollections = useCallback(
    async (page) => {
      setIsLoading(true);

      try {
        const { data } = await listCollectionsService(chainKey, {
          match,
          page,
          offset,
          authorizedAccount: author,
        });

        setCollections((state) => [...state, ...data.data]);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    },
    [match, author, offset, chainKey]
  );

  useEffect(() => {
    if (author && currentPage === 1 && collections.length === 0 && isLoading) {
      handleLoadCollections(currentPage);
    }
  }, [author, currentPage, collections, isLoading, handleLoadCollections]);

  function handleLogin() {
    ual?.showModal();
  }

  async function handleSearch(event) {
    const { value } = event.target;
    clearTimeout(waitToSearch);

    const newWaitToSearch = setTimeout(async () => {
      const { data: collections } = await listCollectionsService(chainKey, {
        match: value || '',
        authorizedAccount: author,
      });
      setMatch(value);
      setCollections(collections.data);
    });

    setWaitToSearch(newWaitToSearch);
  }

  if (author) {
    return (
      <>
        {/* Action Cards - always visible when logged in */}
        <section className="container pt-8 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {actionCards.map((card) => (
              <ActionCard
                key={card.title}
                title={card.title}
                description={card.description}
                href={card.href(chainKey)}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        {/* Collections section */}
        <Header.Root border>
          <Header.Content title="Dashboard" />
          <Header.Search>
            <Input
              icon={<MagnifyingGlass size={24} />}
              type="search"
              placeholder="Search collection"
              onChange={handleSearch}
            />
          </Header.Search>
        </Header.Root>

        <section className="container py-8">
          {collections.length > 0 ? (
            <>
              <CardContainer>
                <CreateNewItem
                  href={`/${chainKey}/collection/new`}
                  label="Create Collection"
                />
                {collections.map((collection, index) => (
                  <Card
                    key={index}
                    href={`/${chainKey}/collection/${collection.collection_name}`}
                    image={
                      collection.img ? `${ipfsEndpoint}/${collection.img}` : ''
                    }
                    title={collection.name}
                    subtitle={`by ${collection.author}`}
                  />
                ))}
              </CardContainer>

              {!isEndOfList && (
                <div className="flex justify-center mt-8">
                  <SeeMoreButton
                    isLoading={isLoading}
                    onClick={() => handleLoadCollections(currentPage + 1)}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {isLoading ? (
                <Loading />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,200,100,0.05))',
                      border: '1px solid rgba(0,255,136,0.2)',
                      boxShadow: '0 0 30px rgba(0,255,136,0.1)',
                    }}
                  >
                    <Stack size={40} style={{ color: '#00ff88' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    No collections yet
                  </h3>
                  <p className="text-neutral-400 mb-8 max-w-md">
                    Create your first NFT collection to get started with
                    minting, templates, and airdrops.
                  </p>
                  <Link
                    href={`/${chainKey}/collection/new`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))',
                      border: '1px solid rgba(0,255,136,0.4)',
                      color: '#00ff88',
                      boxShadow: '0 0 30px rgba(0,255,136,0.15)',
                    }}
                  >
                    <Plus size={20} weight="bold" />
                    Create Your First Collection
                  </Link>
                </div>
              )}
            </>
          )}
        </section>
      </>
    );
  }

  // Not connected state - show hero + action cards
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex items-center justify-center py-16 sm:py-24 px-4">
        <div className="max-w-3xl text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{
              color: '#00ff88',
              textShadow: '0 0 40px rgba(0,255,136,0.3)',
            }}
          >
            XPR NFT Creator
          </h1>
          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            Create collections, mint NFTs, and airdrop to your community — all
            on XPR Network.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300"
              onClick={handleLogin}
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,100,0.1))',
                border: '1px solid rgba(0,255,136,0.4)',
                color: '#00ff88',
                boxShadow: '0 0 30px rgba(0,255,136,0.15)',
              }}
            >
              <Wallet size={20} weight="bold" />
              Connect Wallet to Get Started
            </button>
            <Link
              href={`/${chainKey}/explorer`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 text-neutral-400 hover:text-white"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Explorer
            </Link>
          </div>
        </div>
      </div>

      {/* Action cards preview (visible even without wallet) */}
      <section className="container pb-16">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 text-center">
          What you can do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {actionCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(0, 255, 136, 0.08)',
                opacity: 0.6,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.12)',
                }}
              >
                <card.icon
                  size={28}
                  style={{ color: '#00ff88' }}
                  weight="duotone"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Airdrop guide */}
      <section className="container pb-20">
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(0,255,136,0.12)',
          }}
        >
          <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2 text-center">
            How to Airdrop
          </h2>
          <p className="text-center text-neutral-400 text-sm mb-8">
            Reward your community in 4 steps
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                emoji: '🔑',
                title: 'Connect Wallet',
                detail:
                  'Sign in with WebAuth — fingerprint, Face ID, or YubiKey. No seed phrases.',
              },
              {
                step: '02',
                emoji: '🎨',
                title: 'Create Collection',
                detail:
                  'Set up schemas, upload artwork, and define templates for your NFTs.',
              },
              {
                step: '03',
                emoji: '🖼️',
                title: 'Mint NFTs',
                detail:
                  'Mint from your templates in bulk — ready to send to your community.',
              },
              {
                step: '04',
                emoji: '🪂',
                title: 'Airdrop',
                detail:
                  'Send to SimpleDEX token holders or any collection holders automatically.',
              },
            ].map(({ step, emoji, title, detail }) => (
              <div
                key={step}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold mb-4"
                  style={{
                    background: 'rgba(0,255,136,0.08)',
                    border: '1px solid rgba(0,255,136,0.25)',
                    color: '#00ff88',
                    fontFamily: 'monospace',
                  }}
                >
                  {step}
                </div>
                <div className="text-2xl mb-2">{emoji}</div>
                <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
            <p className="text-xs text-neutral-600">
              Token holder airdrops are powered by{' '}
              <a
                href="https://dex.protonnz.com"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline"
              >
                SimpleDEX
              </a>{' '}
              on{' '}
              <a
                href="https://xprnetwork.org"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline"
              >
                XPR Network
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export const UserCollectionsList = withUAL(UserCollectionsListComponent);
