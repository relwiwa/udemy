import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';

const App = ({ route }) => {
  // any child routes that matched will be rendered
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
