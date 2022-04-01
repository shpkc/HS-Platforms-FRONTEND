import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { HsCoreUi } from '@hs-platforms/hs-core-ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HsCoreUi />
      <Head>
        <title>Welcome to nftify!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
