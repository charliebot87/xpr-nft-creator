import { JsonRpc } from '@proton/js';

const endpoints = [
  process.env.NEXT_PUBLIC_XPR_MAINNET_PROTOCOL +
    '://' +
    process.env.NEXT_PUBLIC_XPR_MAINNET_HOST +
    ':' +
    process.env.NEXT_PUBLIC_XPR_MAINNET_PORT,
].filter(Boolean);

// Fallback if env not set
const defaultEndpoints = ['https://api.protonnz.com'];
const rpcEndpoints =
  endpoints[0] && endpoints[0] !== 'undefined://undefined:undefined'
    ? endpoints
    : defaultEndpoints;

const rpc = new JsonRpc(rpcEndpoints[0]);

const protonRpc = {
  rpc,
  endpoints: rpcEndpoints,

  getAccountData: async (account: string) => {
    try {
      const { rows } = await rpc.get_table_rows({
        code: 'eosio.proton',
        scope: 'eosio.proton',
        table: 'usersinfo',
        lower_bound: account,
        upper_bound: account,
        limit: 1,
      });
      if (rows.length > 0) {
        return {
          name: rows[0].name || account,
          avatar: rows[0].avatar || '',
          isLightKYCVerified: rows[0].verified || false,
        };
      }
      return { name: account, avatar: '', isLightKYCVerified: false };
    } catch {
      return { name: account, avatar: '', isLightKYCVerified: false };
    }
  },

  getAccountBalance: async (account: string) => {
    try {
      const { rows } = await rpc.get_table_rows({
        code: 'eosio.token',
        scope: account,
        table: 'accounts',
        limit: 10,
      });
      const xpr = rows.find((r: any) => r.balance && r.balance.includes('XPR'));
      return xpr ? xpr.balance : '0.0000 XPR';
    } catch {
      return '0.0000 XPR';
    }
  },
};

export default protonRpc;
