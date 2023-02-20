import { RouterProvider } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import GlobalStyle from './components/GlobalStyle';
import configRouter from './pages';
import { IS_LOGGED_IN } from './resolvers/query';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URI,
});

const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

const data = {
  isLoggedIn: !!localStorage.getItem('token'),
};

cache.writeQuery({
  query: IS_LOGGED_IN,
  data,
});

client.onResetStore(() => cache.writeQuery({ query: IS_LOGGED_IN, data }));

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={configRouter} />
    </ApolloProvider>
  );
};

export default App;
