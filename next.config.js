/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: '.next',
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    domains: [
      'simplelaunch.mypinata.cloud', 'ipfs.io',
      'robohash.org',
      'xpr.api.atomicassets.io',
      'proton.api.atomicassets.io',
      'gateway.pinata.cloud',
      'proton.mypinata.cloud',
    ],
  },
};

module.exports = nextConfig;
