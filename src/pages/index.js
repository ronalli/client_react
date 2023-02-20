import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Layout from '../components/Layout';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import PrivateRouter from '../util/PrivateRouter';

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
        element: <PrivateRouter Component={MyNotes} />,
      },
      {
        path: 'favorites',
        element: <PrivateRouter Component={Favorites} />,
      },
      {
        path: 'note/:id',
        element: <NotePage />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
    ],
  },
]);

export default configRouter;
