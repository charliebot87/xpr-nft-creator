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
  webpack: (config) => {
    // @proton/web-sdk is loaded via IIFE bundle script tag (window.ProtonWebSDK)
    // to avoid ESM/CJS interop issues and dual-Svelte-runtime collision.
    // Mark it as external so webpack doesn't try to bundle the broken ESM version.
    config.externals = [
      ...(Array.isArray(config.externals) ? config.externals : [config.externals].filter(Boolean)),
      { '@proton/web-sdk': 'ProtonWebSDK' },
    ];
    return config;
  },
  images: {
    domains: [
      'simplelaunch.mypinata.cloud',
      'agent.mypinata.cloud', 'ipfs.io',
      'robohash.org',
      'xpr.api.atomicassets.io',
      'proton.api.atomicassets.io',
      'gateway.pinata.cloud',
      'proton.mypinata.cloud',
    ],
  },
};

module.exports = nextConfig;
