import { useState } from 'react';
import { useRouter } from 'next/router';

import { Chain } from './components/Chain';
import { NavItem } from './components/NavItem';
import { Login } from './components/Login';
import { List, X } from 'phosphor-react';

import { chainKeyDefault } from '@configs/globalsConfig';

export function TopAppBar() {
  const router = useRouter();
  const chainKey = router.query.chainKey ?? chainKeyDefault;

  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between top-0 left-0 sticky z-40 w-full py-4 px-4 md:px-8"
      style={{
        background: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.08)',
      }}
    >
      <div className="flex items-center gap-3">
        <Chain chainKey={chainKey as string} />
        <div className="hidden md:flex items-center gap-2 ml-2">
          <span
            className="text-xs font-mono tracking-wider"
            style={{ color: 'rgba(0, 255, 136, 0.4)' }}
          >
            {'//'}
          </span>
          <span className="text-xs font-mono tracking-widest neon-text opacity-60">
            NFT CREATOR
          </span>
        </div>
      </div>
      <nav className="flex gap-4">
        <div
          data-open={open}
          className="flex md:items-center w-full h-[calc(100vh-5.5rem)] md:h-auto flex-col md:flex-row absolute right-0 top-[5.5rem] md:static md:transform-none data-[open=false]:-left-full duration-300 data-[open=false]:opacity-0 data-[open=false]:md:opacity-100"
          style={{
            background: open ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          }}
        >
          <NavItem href={`/${chainKey}`} onClick={() => setOpen(false)}>
            Dashboard
          </NavItem>
          <NavItem
            href={`/${chainKey}/collection/new`}
            onClick={() => setOpen(false)}
          >
            Create
          </NavItem>
          <NavItem
            href={`/${chainKey}/plugins/airdrop?type=default`}
            onClick={() => setOpen(false)}
          >
            Airdrop
          </NavItem>
          <NavItem
            href={`/${chainKey}/explorer`}
            onClick={() => setOpen(false)}
          >
            Explorer
          </NavItem>
          <NavItem
            href={`/${chainKey}/transfer`}
            onClick={() => setOpen(false)}
          >
            Transfer
          </NavItem>
          <NavItem href={`/${chainKey}/plugins`} onClick={() => setOpen(false)}>
            Plugins
          </NavItem>
          <NavItem
            href={`/${chainKey}/plugins/marketplace?type=default`}
            onClick={() => setOpen(false)}
          >
            🏪 Marketplace
          </NavItem>
          <NavItem href={`/${chainKey}/about`} onClick={() => setOpen(false)}>
            About
          </NavItem>
          <Login chainKey={chainKey as string} />
        </div>
        <button
          type="button"
          className="p-3 md:hidden text-neon hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={32} /> : <List size={32} />}
        </button>
      </nav>
    </header>
  );
}
