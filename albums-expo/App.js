import React from 'react';
import { View } from 'react-native';

import AlbumList from './src/components/album/album-list';
import Header from './src/reusable-components/header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Albums"
        />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

export default App;
