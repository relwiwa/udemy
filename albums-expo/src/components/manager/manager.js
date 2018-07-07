import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import Router from './router';
import { firebaseKeysManager } from '../../../keys';

class Manager extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseKeysManager); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

export default Manager;
