import { TelegramLogo, GlobeSimple, GithubLogo } from 'phosphor-react';

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
          <XIcon />
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
