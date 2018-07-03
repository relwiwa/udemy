import React from 'react';
import { View } from 'react-native';

import AlbumList from './album-list';
import Header from '../../reusable-components/header';

const Album = () => <View>
  <Header
    headerText="Albums"
  />
  <AlbumList />
</View>;

export default Album;
