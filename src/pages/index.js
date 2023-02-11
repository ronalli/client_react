import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

const router = createBrowserRouter([
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
]);

export default router;
