import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import Album from './src/components/album/album';
import Auth from './src/components/auth/auth';
import Manager from './src/components/manager/manager';
import TechStack from './src/components/tech-stack/tech-stack';

import managerReducers from './src/reducers/manager';

class App extends Component {
  render() {
    const store = createStore(managerReducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Manager />
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
