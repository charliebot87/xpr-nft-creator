import { useRouter } from 'next/router';
import { SignOut } from 'phosphor-react';

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
    <div className="flex items-center gap-3 px-4 md:px-0">
      <span className="font-mono font-bold text-neon text-sm md:text-base">
        {currentUser.actor}
      </span>
      <button
        type="button"
        className="p-2 rounded-lg hover:bg-neutral-800 text-red-400 hover:text-red-300 transition-colors"
        onClick={handleLogout}
        title="Log Out"
        aria-label="Log Out"
      >
        <SignOut size={22} />
      </button>
    </div>
  );
}
