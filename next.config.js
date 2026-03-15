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
  transpilePackages: [
    '@proton/ual-webauth',
    '@proton/web-sdk',
    '@proton/link',
    '@proton/browser-transport',
    '@proton/signing-request',
  ],
  // Don't transpile ual-anchor (it uses node 'net' module)
  // but we still need it at runtime
  webpack: (config, { isServer }) => {
    // Fix @proton/link default export issue
    // The ESM version exports `Link as default` but the CJS doesn't
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    // Force webpack to use the ESM version of @proton/link
    config.resolve.mainFields = ['module', 'main'];

    // Polyfill node modules for browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        dns: false,
      };
    }

    return config;
  },
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
