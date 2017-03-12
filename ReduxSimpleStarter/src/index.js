import React from 'react';
import ReactDom from 'react-dom';

// 1. Create a new component. This component should produce some HTML

// Component is a function or object that returns a certain amount of HTML
const App = () => {
  return <div>Hello World!</div>;
}


// 2. Take this component's generated HTML and put it on the page (in the DOM)

// Passing <App /> creates instance of App class defined above
// First argument is element to be inserted, second where to insert it
ReactDom.render(<App />, document.querySelector('.container'));
