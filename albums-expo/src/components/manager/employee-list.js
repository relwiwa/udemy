import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Spinner from '../../reusable-components/spinner';

import EmployeeListItem from './employee-list-item';

import { employeesFetch } from '../../actions/manager';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderList() {
    if (this.props.employees.length > 0) {
      return <FlatList
        data={this.props.employees}
        renderItem={employee => <EmployeeListItem employee={employee} />}
        keyExtractor={employee => employee.uid}
      />;
    }

    return <Spinner size="large" />;
  }

  render() {
    return (
      this.renderList()
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
