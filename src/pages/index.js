import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './note';
import SignUp from './signup';

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
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default configRouter;
