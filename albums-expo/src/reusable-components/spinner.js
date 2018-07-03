import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size || 'large' } />
    </View>
  )
};

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default Spinner;
