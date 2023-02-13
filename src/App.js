import { RouterProvider } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import GlobalStyle from './components/GlobalStyle';
import configRouter from './pages';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache(),
  connectToDevTools: true,
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
