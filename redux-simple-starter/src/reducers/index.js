import { combineReducers } from 'redux';

import ActiveBookReducer from './reducer-active-book';
import BooksReducer from './reducer-books';

// Create application state by combining various reducers
const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer
});

export default rootReducer;
