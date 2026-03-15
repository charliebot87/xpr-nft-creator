import { Anchor } from 'ual-anchor';

// WebAuth is loaded dynamically client-side due to ESM compatibility
// On Vercel (Node 18) it works, but Node 25 has stricter ESM handling
let WebAuth: any = Anchor; // fallback
if (typeof window !== 'undefined') {
  try {
    // @ts-ignore - dynamic ESM import
    import('@proton/ual-webauth').then((mod) => {
      WebAuth = mod.WebAuth;
    });
  } catch {
    // WebAuth not available
  }
}

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
