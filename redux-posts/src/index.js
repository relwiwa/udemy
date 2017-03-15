import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

// Different History components define what parts of the URL
// React Router uses to detect changes:
// - browserHistory: http://www.blog.com/ -> blogs/abc
// - hashHistory: http://www.blog.com/# -> blogs/abc
// - memoryHistory: Not URL-related 
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
  , document.querySelector('.container'));
