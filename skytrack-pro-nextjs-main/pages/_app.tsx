import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Layout from '../components/layouts/basicLayout.js/BasicLayout';
import Login from './login'
export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
   const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    (isLoggedIn) ? <Layout>
      <Component {...pageProps} />
    </Layout>:<Login></Login>
  );
}
