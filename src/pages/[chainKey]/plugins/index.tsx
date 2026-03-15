import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  Parachute,
  Coins,
  ChartLine,
  DownloadSimple,
  PuzzlePiece,
} from 'phosphor-react';

import { Header } from '@components/Header';

import { appName } from '@configs/globalsConfig';

const defaultPlugins = [
  {
    plugin: 'airdrop',
    label: 'Airdrop',
    description:
      'Simplify NFT Distribution for Large Batches of NFTs using Our User-friendly NFT Drop Tool.',
    icon: Parachute,
  },
  {
    plugin: 'token-airdrop',
    label: 'Token Airdrop',
    description:
      'Airdrop NFTs to holders of SimpleDEX tokens. Select a token, fetch holders, and distribute NFTs.',
    icon: Coins,
  },
  {
    plugin: 'analytics',
    label: 'Analytics',
    description:
      'View collection analytics including holder distribution, mint stats, and template performance.',
    icon: ChartLine,
  },
  {
    plugin: 'import',
    label: 'Import',
    description:
      'Import a CSV to create schema and templates for your collection.',
    icon: DownloadSimple,
  },
];

export default function Plugins({ chainKey }) {
  const [externalPlugins, setExternalPlugins] = useState([]);

  useEffect(() => {
    async function fetchExternal() {
      try {
        const res = await fetch('/api/plugins?path=external');
        const data = await res.json();
        setExternalPlugins(data);
      } catch (error) {
        // no external plugins
      }
    }
    fetchExternal();
  }, []);

  return (
    <>
      <Head>
        <title>{`Plugins - ${appName}`}</title>
      </Head>

      <Header.Root border>
        <Header.Content title="Plugins" />
      </Header.Root>

      <main className="container pt-16">
        <div className="flex flex-col gap-4">
          {defaultPlugins.map((item) => {
            const Icon = item.icon;
            const href =
              item.plugin === 'import'
                ? `/${chainKey}/plugins/${item.plugin}?type=default`
                : `/${chainKey}/plugins/${item.plugin}?type=default`;
            return (
              <Link
                key={item.plugin}
                href={href}
                className="glass-card flex flex-col w-full justify-center items-center gap-md cursor-pointer p-8 group"
              >
                <div className="flex flex-row items-center gap-8 text-white rounded-md w-full">
                  <div
                    className="p-3.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                    style={{
                      background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                      color: '#0a0a0a',
                    }}
                  >
                    <Icon size={40} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="headline-2 group-hover:text-neon transition-all duration-300">
                      {item.label}
                    </span>
                    <span className="body-2 text-neutral-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {externalPlugins
            .filter((p) => p.page === 'plugins')
            .map((item) => (
              <Link
                key={item.plugin}
                href={{
                  pathname: `/${chainKey}/plugins/${item.plugin}`,
                  query: { type: 'external' },
                }}
                className="glass-card flex flex-col w-full justify-center items-center gap-md cursor-pointer p-8 group"
              >
                <div className="flex flex-row items-center gap-8 text-white rounded-md w-full">
                  <div
                    className="p-3.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(153,69,255,0.3)]"
                    style={{
                      background: 'linear-gradient(135deg, #9945FF, #7b2be0)',
                      color: '#fff',
                    }}
                  >
                    <PuzzlePiece size={40} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="headline-2 group-hover:text-neon transition-all duration-300">
                      {item.label}
                    </span>
                    <span className="body-2 text-neutral-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const chainKey = query.chainKey as string;

  try {
    return {
      props: {
        chainKey,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
