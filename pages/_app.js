import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from './../store/store';
import  { Toaster } from 'react-hot-toast';

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const persistor = persistStore(store);


export default function App({ Component, pageProps, session }) {
  
  return (
    <Provider store={store}>
      <Toaster/>
        <SessionProvider session={session}>
          <PersistGate  persistor={persistor} >
            <Component {...pageProps} />
          </PersistGate>

        
    </SessionProvider>
    </Provider>
      
  )
  
}
