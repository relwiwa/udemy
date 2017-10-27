import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
  {
    // no path property means, it will always be displayed
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true,
      }, {
        path: '/users',
        ...UsersListPage,
      },    
    ],
  },
];
