import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts-index';

const Greeting = () => {
  return <div>Hey there!</div>;
}

export default (
  <Route path="/" component={App}>
    {/* IndexRoute matches, when none of the other child routes match */}
    <IndexRoute component={PostsIndex} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);
