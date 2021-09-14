import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#202020" />
        <meta name="description" content="Page for trips and surf" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#000000"
        options={{ trickleSpeed: 100 }}
        startPosition={0.3}
        height={5}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
