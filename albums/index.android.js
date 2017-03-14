import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';

const App = () => (
  <Header headerText={'Albums'} />
);

// - First argument: name of application - albums
// - Second argument: Function that returns component - App
AppRegistry.registerComponent('albums', () => App);
