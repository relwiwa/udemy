import { combineReducers } from 'redux';

import balanceReducer from './balance';
import bitcoinReducer from './bitcoin';

export default combineReducers({
  balance: balanceReducer,
  bitcoin: bitcoinReducer
});
