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
import NewNote from './new';
import EditNote from './edit';

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
      {
        path: 'new',
        element: <PrivateRouter Component={NewNote} />,
      },
      {
        path: 'edit/:id',
        element: <PrivateRouter Component={EditNote} />,
      },
    ],
  },
]);

export default configRouter;
