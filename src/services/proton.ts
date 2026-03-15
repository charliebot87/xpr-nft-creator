import protonRpc from './proton-rpc';

export interface User {
  actor: string;
  avatar: string;
  name: string;
  isLightKYCVerified: boolean;
  permission: string;
}

export interface WalletResponse {
  user: User | null;
  error: string;
}

class ProtonSDKService {
  link: any;
  session: any;
  auth: { actor: string; permission: string } | null = null;
  chainId: any;
  accountData: any;
  appName: string;
  requestAccount: string;

  constructor() {
    this.appName = process.env.NEXT_PUBLIC_APP_NAME || 'XPR NFT Creator';
    this.requestAccount = process.env.NEXT_PUBLIC_REQUEST_ACCOUNT || 'protonnz';
  }

  connect = async ({
    restoreSession,
  }: {
    restoreSession: boolean;
  }): Promise<void> => {
    // Dynamic import to avoid SSR issues with ESM
    console.log('[ProtonSDK] importing @proton/web-sdk...');
    const { default: ConnectWallet } = await import('@proton/web-sdk');

    const { link, session } = await ConnectWallet({
      linkOptions: {
        endpoints: protonRpc.endpoints,
        chainId:
          process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID ||
          '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
        restoreSession,
      },
      transportOptions: {
        requestAccount: this.requestAccount,
      },
      selectorOptions: {
        dialogRootNode:
          typeof document !== 'undefined'
            ? document.getElementById('__next') || document.body
            : undefined,
        appName: this.appName,
      },
    });

    this.link = link;
    this.session = session;
    this.auth = {
      actor: session.auth.actor.toString(),
      permission: session.auth.permission.toString(),
    };
    this.chainId = session.chainId;

    if (this.auth.actor) {
      this.accountData = await protonRpc.getAccountData(this.auth.actor);
    }
  };

  login = async (): Promise<WalletResponse> => {
    console.log('[ProtonSDK] login called');
    try {
      await this.connect({ restoreSession: false });
      if (!this.session || !this.auth || !this.accountData) {
        throw new Error('An error has occurred while logging in');
      }

      const { avatar, isLightKYCVerified, name } = this.accountData;
      return {
        user: {
          actor: this.auth.actor,
          avatar: avatar
            ? `data:image/jpeg;base64,${avatar}`
            : '/xpr-icon-white.png',
          isLightKYCVerified,
          name,
          permission: this.auth.permission,
        },
        error: '',
      };
    } catch (e: any) {
      return {
        user: null,
        error: e.message || 'An error has occurred while logging in',
      };
    }
  };

  logout = async () => {
    if (this.link && this.auth && this.chainId) {
      await this.link.removeSession(
        this.requestAccount,
        this.auth,
        this.chainId
      );
    }
    this.session = null;
    this.auth = null;
    this.link = null;
  };

  restoreSession = async (): Promise<WalletResponse> => {
    try {
      await this.connect({ restoreSession: true });
      if (!this.session || !this.auth || !this.accountData) {
        throw new Error('No session to restore');
      }

      const { avatar, isLightKYCVerified, name } = this.accountData;
      return {
        user: {
          actor: this.auth.actor,
          avatar: avatar
            ? `data:image/jpeg;base64,${avatar}`
            : '/xpr-icon-white.png',
          isLightKYCVerified,
          name,
          permission: this.auth.permission,
        },
        error: '',
      };
    } catch (e: any) {
      return {
        user: null,
        error: e.message || 'An error has occurred while restoring session',
      };
    }
  };

  transact = async (actions: any[]) => {
    if (!this.session) throw new Error('Not logged in');
    return this.session.transact({ actions }, { broadcast: true });
  };
}

const ProtonSDK = new ProtonSDKService();
export default ProtonSDK;
