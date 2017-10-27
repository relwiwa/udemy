import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import createStore from './helpers/create-store';
import renderer from './helpers/renderer';
import routes from './client/routes';

const app = express();

app.use(
  '/api',
  proxy('https://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forward-host'] = 'localhost:3000';
      return opts;
    }
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // matchRoutes returns array of components for respective route
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // loadData needs to be defined for connected component that need data
    return route.loadData ? route.loadData(store) : null;
  });

  /*  when all loadData functions are done, req along with filled store can
      be passed to StaticRouter to render component/s on server, as components
      now can use their mapStateToProps functions to get the data from the now
      filled store */
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
