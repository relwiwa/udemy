import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../../reusable-components/header';
import LibraryList from './library-list';

class TechStack extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText="TechStack"
        />
        <LibraryList />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

export default TechStack;
