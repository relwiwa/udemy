import React from 'react';
import { Text, View, Modal } from 'react-native';

import Button from './button';
import CardSection from './card-section';

const ConfirmModal = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      animationType="slide"
      // onRequestClose is necessary for Android
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSection: {
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center'
  },
}

export default ConfirmModal;
