import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { HsContainer } from '@hs-platforms/hs-core-ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HsContainer display={'flex'}>
        <h1>hello</h1>
        <h1>hello</h1>
      </HsContainer>

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
