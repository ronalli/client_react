import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './note';

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
      {
        path: 'note/:id',
        element: <NotePage />,
      },
    ],
  },
]);

export default configRouter;
