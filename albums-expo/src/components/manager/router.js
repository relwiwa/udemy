import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import EmployeeCreate from './employee-create';
import EmployeeList from './employee-list';
import LoginForm from './login-form';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            component={LoginForm}
            initial
            key="login"
            title="Please login"
          />
        </Scene>
        <Scene key="main">
          <Scene
            component={EmployeeList}
            key="employeeList"
            rightTitle="Add"
            rightButtonTextStyle={{ paddingLeft: 15 }}
            onRight={() => Actions.employeeCreate()}
            title="Employees"
          />
          <Scene
            component={EmployeeCreate}
            key="employeeCreate"
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
