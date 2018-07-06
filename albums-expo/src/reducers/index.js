import { combineReducers } from 'redux';

import LibraryReducer from './library-reducer';
import SelectionReducer from './selection-reducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
