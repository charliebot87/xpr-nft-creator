import { Anchor } from 'ual-anchor';

// WebAuth import handled at runtime due to ESM compatibility
const xprAuthenticators = [Anchor];

module.exports = {
  xpr: {
    name: 'XPR Network',
    imageUrl: 'https://xprnetwork.org/images/xpr-icon.png',
    authenticators: xprAuthenticators,
    aaEndpoint: process.env.NEXT_PUBLIC_XPR_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_XPR_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_XPR_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_XPR_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_XPR_MAINNET_PORT,
  },

  eos: {
    name: 'EOS',
    imageUrl: 'https://bloks.io/img/chains/eos.png',
    authenticators: [Anchor],
    aaEndpoint: process.env.NEXT_PUBLIC_EOS_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_EOS_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_EOS_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_EOS_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_EOS_MAINNET_PORT,
  },

  wax: {
    name: 'WAX',
    imageUrl: 'https://wax.bloks.io/img/chains/wax.png',
    authenticators: [Anchor],
    aaEndpoint: process.env.NEXT_PUBLIC_WAX_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_WAX_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_WAX_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_WAX_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_WAX_MAINNET_PORT,
  },
};
