import React from 'react';
import { AppRegistry, View } from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// - First argument: name of application - albums
// - Second argument: Function that returns component - App
AppRegistry.registerComponent('albums', () => App);
