import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

import apiKeys from './api-keys';


// Component is a function or object that returns a certain amount of HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Passing <App /> creates instance of App class defined above
// First argument is element to be inserted, second where to insert it
ReactDom.render(<App />, document.querySelector('.container'));
