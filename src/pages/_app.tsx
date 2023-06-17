import type { AppProps } from 'next/app'
import './../styles/globals.css'
import { NextRouter, useRouter } from 'next/router';
import  NextNProgress from 'nextjs-progressbar';
import { theme } from '../../config';
import { Provider } from 'react-redux';
import { persistor, wrapper } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../layout';



function App({ Component, ...rest }: AppProps) {

  const router:NextRouter = useRouter();
  const {store, props} = wrapper.useWrappedStore(rest);

  return<Provider store={store} >

    <PersistGate loading={null} persistor={persistor}>

      <Layout page={router.asPath}>

        <NextNProgress color={theme.colors.secondaryA} height={8} />
        <Component {...props.pageProps} />

      </Layout>

    </PersistGate>
    
  </Provider>
  

  
}


export default App;
