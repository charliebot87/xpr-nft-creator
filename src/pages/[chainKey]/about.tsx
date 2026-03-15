import Head from 'next/head';
import { appName } from '@configs/globalsConfig';

const features = [
  {
    emoji: '🎨',
    title: 'Create NFT Collections',
    description:
      'Launch fully custom AtomicAssets NFT collections with schemas, templates, and on-chain metadata. No coding required.',
  },
  {
    emoji: '🖼️',
    title: 'Mint NFTs',
    description:
      'Mint individual or batch NFTs from your templates directly to any XPR Network account.',
  },
  {
    emoji: '🪂',
    title: 'Airdrop to Holders',
    description:
      'Bulk-send NFTs to holders of any existing collection or template. Great for loyalty rewards and community drops.',
  },
  {
    emoji: '🪙',
    title: 'Token Holder Airdrops',
    description:
      'Automatically mint and airdrop NFTs to holders of any SimpleDEX token. Connect your token launch to your NFT community.',
  },
  {
    emoji: '🔍',
    title: 'Collection Explorer',
    description:
      'Browse all public NFT collections on XPR Network. Search, discover, and inspect any collection.',
  },
  {
    emoji: '🔑',
    title: 'WebAuth Wallet',
    description:
      'Sign in with WebAuth — biometrics (Face ID, fingerprint) or YubiKey. No seed phrases in your clipboard.',
  },
];

const steps = [
  {
    step: '1',
    label: 'Connect Wallet',
    detail: 'Sign in with WebAuth or compatible XPR Network wallet.',
  },
  {
    step: '2',
    label: 'Create Collection',
    detail: 'Define schemas, upload artwork, and set templates.',
  },
  {
    step: '3',
    label: 'Mint NFTs',
    detail: 'Mint from your templates to any account or hold in escrow.',
  },
  {
    step: '4',
    label: 'Airdrop',
    detail: 'Drop to token holders or collection holders in one click.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>{`About - ${appName}`}</title>
      </Head>
      <div className="container py-8 max-w-3xl">
        <h2 className="headline-2 mb-4">About XPR NFT Creator</h2>
        <p className="body-1 mb-10 text-neutral-300">
          XPR NFT Creator is a platform for creating, managing, and airdropping
          AtomicAssets NFTs on XPR Network — built specifically for SimpleDEX
          and SimpleLaunch token creators and their communities.
        </p>

        {/* Feature Grid */}
        <h3 className="title-1 mb-6">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(0,255,136,0.1)',
              }}
            >
              <div className="text-2xl mb-3">{f.emoji}</div>
              <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <h3 className="title-1 mb-6">How It Works</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3"
                style={{
                  background: 'rgba(0,255,136,0.1)',
                  border: '1px solid rgba(0,255,136,0.3)',
                  color: '#00ff88',
                }}
              >
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden sm:block absolute"
                  style={{
                    width: '2rem',
                    height: '1px',
                    background: 'rgba(0,255,136,0.2)',
                    top: '20px',
                    right: '-1rem',
                  }}
                />
              )}
              <p className="text-sm font-semibold text-white mb-1">{s.label}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="border-t border-neutral-800 pt-8">
          <h3 className="title-1 mb-4">Ecosystem Links</h3>
          <ul className="space-y-3 body-2">
            <li>
              <a
                href="https://dex.protonnz.com"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline font-medium"
              >
                SimpleDEX
              </a>{' '}
              <span className="text-neutral-400">
                — Token launch platform and DEX on XPR Network. Launch a token,
                then airdrop NFTs to your holders.
              </span>
            </li>
            <li>
              <a
                href="https://xpr.atomichub.io"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline font-medium"
              >
                XPR AtomicHub
              </a>{' '}
              <span className="text-neutral-400">
                — The NFT marketplace for XPR Network. Collections created here
                are instantly tradeable there.
              </span>
            </li>
            <li>
              <a
                href="https://xprnetwork.org"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline font-medium"
              >
                XPR Network
              </a>{' '}
              <span className="text-neutral-400">
                — Sub-second finality, no gas fees for users, WebAuth wallet
                login. The chain this runs on.
              </span>
            </li>
            <li>
              <a
                href="https://webauth.com"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline font-medium"
              >
                WebAuth Wallet
              </a>{' '}
              <span className="text-neutral-400">
                — Sign in with biometrics or YubiKey. No seed phrase on your
                clipboard.
              </span>
            </li>
            <li>
              <a
                href="https://github.com/charliebot87/xpr-nft-creator"
                target="_blank"
                rel="noreferrer"
                className="text-neon hover:underline font-medium"
              >
                GitHub
              </a>{' '}
              <span className="text-neutral-400">
                — Open source. Fork it, customize it, deploy your own.
              </span>
            </li>
          </ul>

          <p className="body-2 text-neutral-500 mt-8">
            Built by{' '}
            <a
              href="https://x.com/charliebot87"
              target="_blank"
              rel="noreferrer"
              className="text-neon hover:underline"
            >
              @charliebot87
            </a>{' '}
            — an AI agent on XPR Network.
          </p>
        </div>
      </div>
    </>
  );
}
