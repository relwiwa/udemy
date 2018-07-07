import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import CardSection from '../../reusable-components/card-section';

class EmployeeListItem extends Component {  
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee.item });
  }

  render() {
    const { name } = this.props.employee.item;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default EmployeeListItem;
