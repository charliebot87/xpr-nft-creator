import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlass } from 'phosphor-react';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Card } from '@components/Card';
import { CardContainer } from '@components/CardContainer';
import { Loading } from '@components/Loading';

import * as chainsConfig from '@configs/chainsConfig';
import { appName, ipfsEndpoint } from '@configs/globalsConfig';

import { CollectionProps } from '@services/collection/listCollectionsService';

const API_BASE = 'https://xpr.api.atomicassets.io';

interface HotSale {
  sale_id: string;
  seller: string;
  listing_price: string;
  listing_symbol: string;
  collection_name: string;
  price?: { token_precision: number };
  assets: {
    asset_id: string;
    name: string;
    data: Record<string, any>;
    template?: { immutable_data: Record<string, any> };
    collection: { collection_name: string; name: string };
  }[];
}

function getIpfsImage(data: Record<string, any>): string {
  const hash = data?.img || data?.image || data?.video || '';
  if (!hash) return '';
  if (hash.startsWith('http')) return hash;
  return `${ipfsEndpoint}/${hash}`;
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

interface ExplorerProps {
  chainKey: string;
  initialCollections: CollectionProps[];
}

function getCollectionImageUrl(img: string): string {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  const base = ipfsEndpoint || 'https://ipfs.io/ipfs';
  return `${base}/${img}`;
}

export default function Explorer({
  chainKey,
  initialCollections,
}: ExplorerProps) {
  const [search, setSearch] = useState('');
  const [hotSales, setHotSales] = useState<HotSale[]>([]);
  const [loadingSales, setLoadingSales] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${API_BASE}/atomicmarket/v1/sales?state=1&sort=created&order=desc&limit=8`
        );
        const json = await res.json();
        if (json.success) setHotSales(json.data || []);
      } catch {
        // silently fail
      } finally {
        setLoadingSales(false);
      }
    })();
  }, []);

  const filtered = initialCollections.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.collection_name?.toLowerCase().includes(q) ||
      c.author?.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Head>
        <title>{`SimpleDEX Community Collections - ${appName}`}</title>
      </Head>

      <Header.Root border>
        <Header.Content title="SimpleDEX Community Collections" />
        <Header.Search>
          <Input
            icon={<MagnifyingGlass size={24} />}
            type="search"
            placeholder="Search collection"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Header.Search>
      </Header.Root>

      {/* 🔥 Hot Sales Section */}
      {hotSales.length > 0 && (
        <section className="container py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              🔥 Active Sales
            </h2>
            <Link
              href={`/${chainKey}/plugins/marketplace?type=default`}
              className="text-[#9966ff] hover:text-[#b088ff] text-sm font-semibold transition-colors"
            >
              View all →
            </Link>
          </div>
          <div
            className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {hotSales.map((sale) => {
              const asset = sale.assets?.[0];
              if (!asset) return null;
              const immData =
                asset?.template?.immutable_data || asset?.data || {};
              const imgUrl = getIpfsImage(immData);
              const name =
                asset?.name ||
                asset?.data?.name ||
                immData?.name ||
                `#${asset.asset_id}`;

              return (
                <Link
                  key={sale.sale_id}
                  href={`/${chainKey}/collection/${sale.collection_name}/asset/${asset.asset_id}`}
                  className="flex-shrink-0 w-48 md:w-56 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 hover:border-[#00ff88]/40 transition-all duration-200 snap-start group"
                >
                  <div className="aspect-square bg-neutral-800 relative overflow-hidden">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-white font-semibold text-sm truncate">
                      {name}
                    </h3>
                    <p className="text-neutral-500 text-xs truncate">
                      {sale.collection_name}
                    </p>
                    <p className="text-[#00ff88] font-bold text-base mt-1">
                      {formatXprPrice(
                        sale.listing_price,
                        sale.price?.token_precision || 4
                      )}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="container py-8">
        <p className="text-green-400 text-sm mb-6 font-mono">
          Showing NFT collections from SimpleDEX token creators and top traders
        </p>

        {filtered.length > 0 ? (
          <CardContainer>
            {filtered.map((collection, index) => (
              <Card
                key={index}
                href={`/${chainKey}/collection/${collection.collection_name}`}
                image={
                  collection.img ? getCollectionImageUrl(collection.img) : ''
                }
                title={collection.name}
                subtitle={`by ${collection.author}`}
              />
            ))}
          </CardContainer>
        ) : (
          <div className="bg-neutral-800 px-8 py-24 text-center rounded-xl">
            <h4 className="title-1">No collections found</h4>
          </div>
        )}
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const chainsKeys = Object.keys(chainsConfig);

  const paths = chainsKeys.map((chainKey) => ({
    params: { chainKey },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chainKey = params.chainKey as string;

  try {
    const UA = 'xpr-nft-creator/1.0';

    // Fetch SimpleDEX creators (token creators)
    const tokensRes = await fetch(
      'https://indexer.protonnz.com/api/tokens?fields=compact&limit=500',
      { headers: { 'User-Agent': UA } }
    );
    const tokensJson = await tokensRes.json();
    const creatorAccounts: string[] = (tokensJson.tokens || []).map(
      (t: { creator: string }) => t.creator
    );

    // Fetch SimpleDEX leaderboard (top creators + top traders)
    const lbRes = await fetch(
      'https://indexer.protonnz.com/api/leaderboard?limit=100',
      { headers: { 'User-Agent': UA } }
    );
    const lbJson = await lbRes.json();
    const topCreatorAccounts: string[] = (lbJson.topCreators || []).map(
      (t: { account: string }) => t.account
    );
    const topTraderAccounts: string[] = (lbJson.topTraders || []).map(
      (t: { account: string }) => t.account
    );

    // Combine into unique set
    const allowedAccounts = new Set([
      ...creatorAccounts,
      ...topCreatorAccounts,
      ...topTraderAccounts,
    ]);

    // Fetch all collections from AtomicAssets (high limit)
    const aaEndpoint =
      chainsConfig[chainKey]?.aaEndpoint || 'https://xpr.api.atomicassets.io';
    const collectionsRes = await fetch(
      `${aaEndpoint}/atomicassets/v1/collections?limit=500&order=desc&sort=created`,
      { headers: { 'User-Agent': UA } }
    );
    const collectionsJson = await collectionsRes.json();
    const allCollections: CollectionProps[] = collectionsJson.data || [];

    // Filter to only SimpleDEX community members with images
    const filteredCollections = allCollections.filter(
      (c) => allowedAccounts.has(c.author) && c.img
    );

    return {
      props: {
        chainKey,
        initialCollections: filteredCollections,
      },
      revalidate: 300, // 5 minutes
    };
  } catch (error) {
    console.error('Explorer getStaticProps error:', error);
    return {
      props: {
        chainKey,
        initialCollections: [],
      },
      revalidate: 300,
    };
  }
};
