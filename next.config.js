/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: '.next',
  images: {
    domains: [
      'ipfs.io',
      'robohash.org',
      'apricot-obliged-lion-20.mypinata.cloud',
      'simplelaunch.mypinata.cloud',
      'proton.api.atomicassets.io',
      'xpr.api.atomicassets.io',
      'agent.mypinata.cloud',
      'gateway.pinata.cloud',
      'proton.mypinata.cloud',
    ],
  },
};

module.exports = nextConfig;
