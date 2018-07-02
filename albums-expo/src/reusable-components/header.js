import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerText } = props;

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 20,
  },
  view: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    elevation: 2,
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
};

export default Header;
