import type { AppProps } from 'next/app'
import './../styles/globals.css'
import Layout from '@/layout'
import { NextRouter, useRouter } from 'next/router'
import  NextNProgress from 'nextjs-progressbar';
import { theme } from '../../config';


export default function App({ Component, pageProps }: AppProps) {

  const router:NextRouter = useRouter();

  return <Layout page={router.asPath}>
    <NextNProgress color={theme.colors.secondaryA} height={6} />
    <Component {...pageProps} />
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAQTFLoIOi62NEyIdBaeIvDemaj3WhZzqA&libraries=places&v=weekly" defer></script>

  </Layout>
  
}
