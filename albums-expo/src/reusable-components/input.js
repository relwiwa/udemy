import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        underlineColorAndroid="transparent"
        value={value}
      />
    </View>
  )
};

const styles = {
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 20,
    width: 100,
    flex: 2,
  },
}

export default Input;
