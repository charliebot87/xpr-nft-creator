import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Card } from '@components/Card';
import { CardContainer } from '@components/CardContainer';
import { Loading } from '@components/Loading';

import * as chainsConfig from '@configs/chainsConfig';
import { appName, ipfsEndpoint } from '@configs/globalsConfig';

import { CollectionProps } from '@services/collection/listCollectionsService';

interface ExplorerProps {
  chainKey: string;
  initialCollections: CollectionProps[];
}

function getCollectionImageUrl(img: string): string {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  const base = ipfsEndpoint || 'https://ipfs.io';
  return `${base}/ipfs/${img}`;
}

export default function Explorer({
  chainKey,
  initialCollections,
}: ExplorerProps) {
  const [search, setSearch] = useState('');

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

    // Filter to only SimpleDEX community members
    const filteredCollections = allCollections.filter((c) =>
      allowedAccounts.has(c.author)
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
