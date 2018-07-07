import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';

import { employeeDelete, employeeSave, employeeUpdate } from '../../actions/manager';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import ConfirmModal from '../../reusable-components/confirm-modal';
import EmployeeForm from './employee-form';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    const { showModal } = this.state;

    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !showModal })}>
            Fire employee
          </Button>
        </CardSection>
        <ConfirmModal
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={showModal}
        >
          Are you sure you want to delete this?
        </ConfirmModal>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return { name, phone, shift } = state.employeeForm;
}

export default connect(mapStateToProps, {
  employeeDelete,
  employeeSave,
  employeeUpdate,
})(EmployeeEdit);