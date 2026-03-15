import { Anchor } from 'ual-anchor';

const chainsConfig = {
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

export default chainsConfig;
