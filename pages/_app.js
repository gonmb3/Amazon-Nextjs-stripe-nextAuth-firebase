import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from './../store/store';
import  { Toaster } from 'react-hot-toast';



export default function App({ Component, pageProps, session }) {
  
  return (
    <Provider store={store}>
      <Toaster/>
        <SessionProvider session={session}>

            <Component {...pageProps} />   
   
    </SessionProvider>
    </Provider>
      
  )
  
}
