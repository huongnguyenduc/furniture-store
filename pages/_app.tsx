import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Calibre } from '../assets/fonts/Calibre/Calibre';
import { theme } from '../config/theme';
import Layout from '../components/Layout/Layout';
import { SearchProvider } from '../components/SearchProvider/SearchProvider';
import { styles } from '../config/styles';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import { axiosFetcher } from '../utils/fetcher';
import { SessionProvider } from 'next-auth/react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppPropsWithLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Furniture Store</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <SessionProvider>
        <SWRConfig value={{ fetcher: axiosFetcher }}>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <Calibre />
            <SearchProvider>
              <MantineProvider
                theme={{ ...theme, colorScheme }}
                styles={styles}
                withGlobalStyles
                withNormalizeCSS
              >
                <NotificationsProvider>
                  <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
                </NotificationsProvider>
              </MantineProvider>
            </SearchProvider>
          </ColorSchemeProvider>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
