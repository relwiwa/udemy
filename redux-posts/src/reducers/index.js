import { combineReducers } from 'redux';

import PostsReducer from './reducer-posts';
import { reducer as formReducer } from 'redux-form';

// form state property needs to be called form for redux-form to work
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
