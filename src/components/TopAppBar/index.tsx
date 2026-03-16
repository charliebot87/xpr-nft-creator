import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Chain } from './components/Chain';
import { Login } from './components/Login';
import {
  House,
  MagnifyingGlass,
  Storefront,
  Wallet,
  PlusCircle,
  PaperPlaneTilt,
  Parachute,
  PuzzlePiece,
  Info,
} from 'phosphor-react';

import { chainKeyDefault } from '@configs/globalsConfig';

interface MobileNavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function MobileNavItem({
  href,
  label,
  icon,
  active,
  onClick,
}: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-neon/10 text-neon'
          : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
      }`}
      onClick={onClick}
    >
      <span className="text-neon">{icon}</span>
      <span className="text-lg">{label}</span>
    </Link>
  );
}

interface DesktopNavItemProps {
  href: string;
  children: React.ReactNode;
  currentPath: string;
}

function DesktopNavItem({ href, children, currentPath }: DesktopNavItemProps) {
  const isActive =
    currentPath === href ||
    (currentPath.split('?')[0] === href?.split('?')[0] &&
      href?.includes('?') &&
      currentPath.includes(href?.split('?')[1] || ''));

  return (
    <Link
      href={href}
      className={`text-sm font-semibold px-3 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
        isActive
          ? 'text-neon bg-neon/10'
          : 'text-neutral-400 hover:text-neon/80 hover:bg-neutral-800/50'
      }`}
      style={
        isActive ? { textShadow: '0 0 10px rgba(0, 255, 136, 0.3)' } : undefined
      }
    >
      {children}
    </Link>
  );
}

export function TopAppBar() {
  const router = useRouter();
  const chainKey = router.query.chainKey ?? chainKeyDefault;
  const currentPath = router.asPath;

  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const navItems = {
    main: [
      {
        href: `/${chainKey}`,
        label: 'Dashboard',
        icon: <House size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/explorer`,
        label: 'Explorer',
        icon: <MagnifyingGlass size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/plugins/marketplace?type=default`,
        label: 'Marketplace',
        icon: <Storefront size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/my-nfts`,
        label: 'My NFTs',
        icon: <Wallet size={20} weight="bold" />,
      },
    ],
    create: [
      {
        href: `/${chainKey}/collection/new`,
        label: 'Create',
        icon: <PlusCircle size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/plugins/airdrop?type=default`,
        label: 'Airdrop',
        icon: <Parachute size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/transfer`,
        label: 'Transfer',
        icon: <PaperPlaneTilt size={20} weight="bold" />,
      },
    ],
    more: [
      {
        href: `/${chainKey}/plugins`,
        label: 'Plugins',
        icon: <PuzzlePiece size={20} weight="bold" />,
      },
      {
        href: `/${chainKey}/about`,
        label: 'About',
        icon: <Info size={20} weight="bold" />,
      },
    ],
  };

  const isActive = (href: string) =>
    currentPath === href ||
    (currentPath.split('?')[0] === href?.split('?')[0] &&
      href?.includes('?') &&
      currentPath.includes(href?.split('?')[1] || ''));

  return (
    <>
      <header
        className="flex items-center justify-between top-0 left-0 sticky z-40 w-full py-3 px-4 md:px-8"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 255, 136, 0.08)',
        }}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <Chain chainKey={chainKey as string} />
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.main.map((item) => (
            <DesktopNavItem
              key={item.href}
              href={item.href}
              currentPath={currentPath}
            >
              {item.label}
            </DesktopNavItem>
          ))}
          <span className="text-neutral-700 mx-1">|</span>
          {navItems.create.map((item) => (
            <DesktopNavItem
              key={item.href}
              href={item.href}
              currentPath={currentPath}
            >
              {item.label}
            </DesktopNavItem>
          ))}
          <span className="text-neutral-700 mx-1">|</span>
          {navItems.more.map((item) => (
            <DesktopNavItem
              key={item.href}
              href={item.href}
              currentPath={currentPath}
            >
              {item.label}
            </DesktopNavItem>
          ))}
        </nav>

        {/* Right: Desktop Login + Mobile Burger */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Login chainKey={chainKey as string} />
          </div>

          {/* Burger button - mobile only */}
          <button
            type="button"
            className="relative w-10 h-10 flex items-center justify-center lg:hidden z-[60]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-6 bg-neon rounded-full transition-all duration-300 origin-center ${
                  open ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-neon rounded-full transition-all duration-300 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-neon rounded-full transition-all duration-300 origin-center ${
                  open ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'rgba(0, 0, 0, 0.95)' }}
      >
        <div className="flex flex-col h-full p-6 pt-20 overflow-y-auto">
          {/* Header with close */}
          <div className="flex justify-between items-center mb-6">
            <span className="neon-text font-mono text-lg">XPR NFT Creator</span>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {/* Section: Main */}
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 mt-2">
              Main
            </div>
            {navItems.main.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
                onClick={() => setOpen(false)}
              />
            ))}

            {/* Section: Create */}
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 mt-6">
              Create
            </div>
            {navItems.create.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
                onClick={() => setOpen(false)}
              />
            ))}

            {/* Section: More */}
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 mt-6">
              More
            </div>
            {navItems.more.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>

          {/* Wallet login at bottom */}
          <div className="mt-auto pt-6 pb-6 border-t border-neutral-800">
            <Login chainKey={chainKey as string} />
          </div>
        </div>
      </div>
    </>
  );
}
