// WebAuth only — no Anchor
// WebAuth import is handled dynamically due to ESM compat with Node 25
// On Vercel (Node 18) this resolves correctly at runtime

const authenticators: any[] = [];

// WebAuth will be injected by _app.tsx client-side
export default {
  xpr: {
    name: 'XPR Network',
    imageUrl: '/xpr-icon-white.png',
    authenticators,
    aaEndpoint: process.env.NEXT_PUBLIC_XPR_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_XPR_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_XPR_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_XPR_MAINNET_PORT,
  },
};
