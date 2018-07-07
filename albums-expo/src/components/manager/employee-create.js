import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../../actions/manager';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import Input from '../../reusable-components/input';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            placeholder="Jane"
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            placeholder="555-555-5555"
            value={this.props.phone}
          />
        </CardSection>
        <CardSection style={styles.pickerSection}>
          <Text style={styles.pickerText}>Shift</Text>
          <Picker
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            selectedValue={this.props.shift}
            style={styles.picker}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  picker: {
    flex: 1,
    paddingTop: 120,
  },
  pickerSection: {
    flexDirection: 'column',
  },
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = state => {
  return { name, phone, shift } = state.employee;
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
