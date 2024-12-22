import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../apolloClient';
import { Nunito } from 'next/font/google'
const nuniti = Nunito({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className={nuniti.className}><Component {...pageProps} /></div>
    </ApolloProvider>
  );
}

export default MyApp;
