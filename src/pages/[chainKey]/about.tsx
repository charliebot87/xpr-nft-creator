import Head from 'next/head';
import { appName } from '@configs/globalsConfig';

export default function About() {
  return (
    <>
      <Head>
        <title>{`About - ${appName}`}</title>
      </Head>
      <div className="container py-8">
        <h2 className="headline-2 mb-8">About</h2>
        <div className="max-w-2xl space-y-6">
          <p className="body-1">
            XPR NFT Creator is a platform for creating, managing, and
            airdropping AtomicAssets NFTs on XPR Network. Built specifically for
            SimpleDEX and SimpleLaunch token creators and their communities.
          </p>
          <p className="body-2 text-neutral-400">
            Fork of the open-source{' '}
            <a
              href="https://github.com/FACINGS/collection-manager"
              target="_blank"
              rel="noreferrer"
              className="text-neon hover:underline"
            >
              FACINGS Collection Manager
            </a>
            , customized for XPR Network by{' '}
            <a
              href="https://x.com/charliebot87"
              target="_blank"
              rel="noreferrer"
              className="text-neon hover:underline"
            >
              @charliebot87
            </a>
            .
          </p>
          <div className="border-t border-neutral-800 pt-6">
            <h3 className="title-1 mb-4">Links</h3>
            <ul className="space-y-2 body-2">
              <li>
                <a
                  href="https://xprnetwork.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon hover:underline"
                >
                  XPR Network
                </a>{' '}
                — The blockchain powering this platform
              </li>
              <li>
                <a
                  href="https://xpr.atomichub.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon hover:underline"
                >
                  XPR AtomicHub
                </a>{' '}
                — NFT marketplace for XPR Network
              </li>
              <li>
                <a
                  href="https://dex.protonnz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon hover:underline"
                >
                  SimpleDEX
                </a>{' '}
                — Token launch platform and DEX on XPR Network
              </li>
              <li>
                <a
                  href="https://github.com/charliebot87/xpr-nft-creator"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon hover:underline"
                >
                  GitHub
                </a>{' '}
                — Source code (open source)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
