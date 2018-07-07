import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../reusable-components/header';
import LoginForm from './login-form';

import { firebaseKeysManager } from '../../../keys';

class Manager extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseKeysManager); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="Manager"
        />
        <LoginForm />
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
