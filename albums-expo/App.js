import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Album from './src/components/album/album';
import Auth from './src/components/auth/auth';
import TechStack from './src/components/tech-stack/tech-stack';

import reducers from './src/reducers';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <TechStack />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

export default App;
