import { RouterProvider } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

import GlobalStyle from './components/GlobalStyle';
import configRouter from './pages';

const link = new HttpLink({
  uri: process.env.REACT_APP_API_URI,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={configRouter} />
    </ApolloProvider>
  );
};

export default App;
