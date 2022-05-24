import '../styles/globals.css'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import { Html, Head, Main, NextScript } from 'next'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
