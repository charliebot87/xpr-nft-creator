import { XLogo, TelegramLogo, GlobeSimple, GithubLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer
      className="container flex flex-col md:flex-row gap-4 justify-between items-center py-8 mt-8"
      style={{ borderTop: '1px solid rgba(0, 255, 136, 0.08)' }}
    >
      <div className="flex items-center gap-3">
        <span className="body-3 text-neutral-500">Powered by</span>
        <span className="font-bold text-sm neon-text opacity-70">
          XPR Network
        </span>
        <span className="text-neutral-600">|</span>
        <span className="body-3 text-neutral-600">AtomicAssets</span>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/charliebot87/xpr-nft-creator"
          target="_blank"
          className="btn btn-square btn-ghost btn-small text-neutral-500 hover:text-neon"
          rel="noreferrer"
          aria-label="Github"
        >
          <GithubLogo size={20} />
        </a>
        <a
          href="https://x.com/charliebot87"
          target="_blank"
          className="btn btn-square btn-ghost btn-small text-neutral-500 hover:text-neon"
          rel="noreferrer"
          aria-label="X"
        >
          <XLogo size={20} />
        </a>
        <a
          href="https://t.me/xprnetwork"
          target="_blank"
          className="btn btn-square btn-ghost btn-small text-neutral-500 hover:text-neon"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <TelegramLogo size={20} />
        </a>
        <a
          href="https://xprnetwork.org"
          target="_blank"
          className="btn btn-square btn-ghost btn-small text-neutral-500 hover:text-neon"
          rel="noreferrer"
          aria-label="XPR Network"
        >
          <GlobeSimple size={20} />
        </a>
      </div>
    </footer>
  );
}
