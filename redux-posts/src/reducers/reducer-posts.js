import { FETCH_POST } from '../actions/index';
import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_POST:
      return {
        ...state,
        post: action.payload.data
      };

    case FETCH_POSTS:
      {/* Usage of spread operator:
          - Return current state and update all value */}
      return {
        ...state,
        all: action.payload.data
      };

    default:
      return state;
  }
}