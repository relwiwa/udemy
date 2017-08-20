import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  auth,
  form,
});

export default rootReducer;
