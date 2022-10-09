import type { AppProps } from "next/app";
import Head from "next/head";

import { APIProvider } from "~/api/rest";
import { SearchLayout } from "~/layouts/SearchLayout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0"
        />
      </Head>

      <SearchLayout>
        <Component {...pageProps} />
      </SearchLayout>
    </APIProvider>
  );
}

export default MyApp;
