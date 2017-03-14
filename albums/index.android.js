import React from 'react';
import { AppRegistry, View } from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => (
  // flex: 1 style is necessary for ScrollView to work properly
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// - First argument: name of application - albums
// - Second argument: Function that returns component - App
AppRegistry.registerComponent('albums', () => App);
