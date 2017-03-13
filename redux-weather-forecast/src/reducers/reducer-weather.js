import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // - Manual state mutation needs to be avoided, so it is necessary to
      //   return a new instance of state instead of just pushing the new
      //   element to the existing state
      // - concat does not change the original array 
      // - ES6 variation:
      //   return [action.payload.data ...state];
      return [action.payload.data].concat(state);
  }

  return state;
}