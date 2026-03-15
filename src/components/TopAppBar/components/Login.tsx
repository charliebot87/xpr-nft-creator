import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react';
import { CaretDown, HardDrives, SignOut } from 'phosphor-react';
import Link from 'next/link';

import { useAuthContext } from '@components/Provider/AuthProvider';

interface LoginProps {
  chainKey: string;
}

export function Login({ chainKey }: LoginProps) {
  const router = useRouter();
  const { currentUser, login, logout, authError } = useAuthContext();

  function handleLogin() {
    login();
  }

  function handleLogout() {
    logout();
    router.reload();
  }

  if (!currentUser) {
    return (
      <div className="px-4 md:px-0">
        <button
          type="button"
          className="btn btn-primary whitespace-nowrap"
          onClick={handleLogin}
        >
          Connect Wallet
        </button>
        {authError && (
          <p className="text-red-400 text-xs mt-1 max-w-[200px] truncate">
            {authError}
          </p>
        )}
      </div>
    );
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex gap-2 md:gap-1 items-center md:text-base text-2xl font-bold p-4 ui-open:text-neon ui-not-open:text-neutral-400 transition-colors">
        <span className="font-mono">{currentUser.actor}</span>
        <CaretDown size={16} weight="bold" className="ui-open:rotate-180" />
      </Menu.Button>

      <Menu.Items
        className="absolute z-10 top-14 md:right-0 right-4 rounded-xl w-[calc(100%-2rem)] md:w-auto"
        style={{
          background: 'rgba(13, 17, 23, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 255, 136, 0.15)',
        }}
      >
        <Menu.Item>
          <Link href={`/${chainKey}/resources`}>
            <div
              className="flex gap-4 ui-active:bg-neon/5 md:body-2 body-1 font-bold text-white p-4 justify-center"
              style={{
                borderBottom: '1px solid rgba(0, 255, 136, 0.08)',
              }}
            >
              <HardDrives size={24} />
              <span>Resources</span>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <button
            type="button"
            className="flex gap-4 ui-active:bg-neon/5 w-full md:body-2 body-1 font-bold p-4 rounded-b-xl whitespace-nowrap text-red-400"
            onClick={handleLogout}
          >
            <SignOut size={24} />
            Log Out
          </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
