// UAL compatibility layer - wraps our AuthProvider to look like UAL
// So existing pages using `withUAL` and `ual.activeUser` still work

import React from 'react';
import { useAuthContext } from '@components/Provider/AuthProvider';
import ProtonSDK from '../services/proton';

// Create a fake UAL activeUser that wraps our ProtonSDK session
function createActiveUser(actor: string, permission: string) {
  return {
    accountName: actor,
    requestPermission: permission,
    chainId:
      process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID ||
      '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
    chain: {
      chainId:
        process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID ||
        '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
    },
    signTransaction: async (transaction: any, options?: any) => {
      return ProtonSDK.transact(transaction.actions || [transaction]);
    },
  };
}

// HOC that replaces withUAL - injects ual prop from AuthContext
export function withUAL<P extends { ual?: any }>(
  Component: React.ComponentType<P>
) {
  const WrappedComponent = (props: Omit<P, 'ual'>) => {
    const { currentUser, login, logout } = useAuthContext();

    const ual = {
      activeUser: currentUser
        ? createActiveUser(currentUser.actor, currentUser.permission)
        : null,
      showModal: () => {
        console.log('[UAL-compat] showModal called');
        login();
      },
      logout: logout,
    };

    return <Component {...(props as P)} ual={ual} />;
  };

  WrappedComponent.displayName = `withUAL(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
}
