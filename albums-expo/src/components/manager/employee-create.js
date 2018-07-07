import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeCreate, employeeUpdate } from '../../actions/manager';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { employeeCreate, name, phone, shift } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm  {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { name, phone, shift } = state.employeeForm;
}

export default connect(mapStateToProps, {
  employeeCreate,
  employeeUpdate,
 })(EmployeeCreate);
