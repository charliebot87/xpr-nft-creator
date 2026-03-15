import { Anchor } from 'ual-anchor';

// Anchor works reliably on all Node versions
// WebAuth needs ESM compat - added in authenticators.ts client-side
export default {
  xpr: {
    name: 'XPR Network',
    imageUrl: '/xpr-icon-white.png',
    authenticators: [Anchor],
    aaEndpoint: process.env.NEXT_PUBLIC_XPR_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_XPR_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_XPR_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_XPR_MAINNET_PORT,
  },
};
