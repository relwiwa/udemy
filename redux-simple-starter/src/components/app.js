import React from 'react';

import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
