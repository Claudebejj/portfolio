// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://be121.onetoonefit.com/121/graphql',
  cache: new InMemoryCache(),
});

export default client;