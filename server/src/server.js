import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import createStore from './helpers/create-store';
import renderer from './helpers/renderer';
import routes from './client/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // matchRoutes returns array of components for respective route
  matchRoutes(routes, req.path).map(({ route }) => {
    // loadData needs to be defined for connected component that need data
    return route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
