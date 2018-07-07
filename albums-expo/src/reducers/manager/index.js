import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import EmployeeReducer from './employee-reducer';

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
});
