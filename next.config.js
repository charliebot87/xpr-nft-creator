/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: '.next',
  images: {
    domains: [
      'wax.bloks.io',
      'bloks.io',
      'facings.mypinata.cloud',
      'robohash.org',
      'ipfs.ledgerwise.io',
      'xprnetwork.org',
      'apricot-obliged-lion-20.mypinata.cloud',
      'simplelaunch.mypinata.cloud',
      'proton.api.atomicassets.io',
      'agent.mypinata.cloud',
    ],
  },
};

module.exports = nextConfig;
