import React from 'react';
import { Text } from 'react-native';
import CardSection from '../../reusable-components/card-section';

const EmployeeListItem = (props) => {
  const { name } = props.employee.item;

  return <CardSection>
    <Text style={styles.title}>{name}</Text>
  </CardSection>;
};

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default EmployeeListItem;
