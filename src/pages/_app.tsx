import 'regenerator-runtime/runtime';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { TopAppBar } from '@components/TopAppBar';
import { Footer } from '@components/Footer';
import { MatrixRain } from '@components/MatrixRain';
import { AuthProvider } from '@components/Provider/AuthProvider';
import type { AppProps } from 'next/app';

import { appName } from '@configs/globalsConfig';
import '@utils/yupMethods';

import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{appName}</title>
      </Head>

      <MatrixRain />
      <div className="scanline-overlay" />

      <AuthProvider>
        <div className="relative z-10">
          <TopAppBar />
          <Component key={router.asPath} {...pageProps} />
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}
