import type { AppProps } from 'next/app'
import './../styles/globals.css'
import Layout from '@/layout'
import { NextRouter, useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router:NextRouter = useRouter();

  return <Layout page={router.asPath}>

    <Component {...pageProps} />
  </Layout>
  
}
