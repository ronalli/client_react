import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';

const configRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'mynotes',
        element: <MyNotes />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);

export default configRouter;
