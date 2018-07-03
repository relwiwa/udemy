import React from 'react';
import { View } from 'react-native';

import Album from './src/components/album/album';
import Auth from './src/components/auth/auth';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Auth />
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
