import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import configRouter from './pages';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={configRouter} />
    </div>
  );
};

export default App;
