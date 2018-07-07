import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import EmployeeReducer from './employee-reducer';
import EmployeeFormReducer from './employee-form-reducer';

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
  employeeForm: EmployeeFormReducer,
});
