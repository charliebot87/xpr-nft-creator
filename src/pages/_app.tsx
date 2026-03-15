import 'regenerator-runtime/runtime';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { UALProvider } from 'ual-reactjs-renderer';

import { TopAppBar } from '@components/TopAppBar';
import { Footer } from '@components/Footer';
import { MatrixRain } from '@components/MatrixRain';
import type { AppProps } from 'next/app';

import {
  appName,
  chainKeyDefault,
  requestAccount,
} from '@configs/globalsConfig';
import { blockchains } from '@utils/blockchains';
import '@utils/yupMethods';

import * as chainsConfig from '@configs/chainsConfig';

import '@styles/globals.css';

function buildAuthenticators(extraAuths: any[] = []) {
  const result = {};

  Object.keys(chainsConfig).forEach((chainKey) => {
    const { authenticators: auths, chainId } = chainsConfig[chainKey];
    const blockchain = blockchains.find((b) => b.chainId === chainId);

    if (!blockchain) {
      result[chainId] = [];
      return;
    }

    // Combine static authenticators with dynamically loaded ones
    const allAuths = [...(auths || []), ...extraAuths].filter(
      (Auth) => Auth != null && typeof Auth === 'function'
    );

    result[chainId] = allAuths.map(
      (Authenticator) =>
        new Authenticator([blockchain], {
          appName,
          disableGreymassFuel: true,
          transportOptions: {
            requestAccount,
          },
          selectorOptions: {
            appName,
            dialogRootNode: '#__next',
          },
        })
    );
  });

  return result;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authenticators, setAuthenticators] = useState(() =>
    buildAuthenticators()
  );
  const [authKey, setAuthKey] = useState(0);

  // Load WebAuth client-side only
  useEffect(() => {
    import('@proton/ual-webauth')
      .then((mod) => {
        if (mod.WebAuth) {
          setAuthenticators(buildAuthenticators([mod.WebAuth]));
          setAuthKey((k) => k + 1); // Force UALProvider re-render
        }
      })
      .catch(() => {
        // WebAuth not available, Anchor only
      });
  }, []);

  const chainId = (chainsConfig[`${router.query.chainKey}`]?.chainId ??
    chainsConfig[chainKeyDefault]?.chainId) as string;

  if (!chainId) return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{appName}</title>
      </Head>

      <MatrixRain />
      <div className="scanline-overlay" />

      <UALProvider
        appName={appName}
        authenticators={authenticators[chainId] || []}
        chains={blockchains}
        key={`${chainId}-${authKey}`}
      >
        <div className="relative z-10">
          <TopAppBar />
          <Component key={router.asPath} {...pageProps} />
          <Footer />
        </div>
      </UALProvider>
    </>
  );
}
