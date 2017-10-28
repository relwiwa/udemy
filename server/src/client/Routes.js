import React from 'react';

import AdminsListPage from './pages/AdminsListPage';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
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
      }, {
        /*  no path property means, it will be shown when
            no other route matched */
        ...NotFoundPage,
      },
    ],
  },
];
