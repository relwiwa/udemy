import { combineReducers } from 'redux';

import BooksReducer from './reducer-books';

// Create application state by combining various reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
