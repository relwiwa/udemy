import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {
  renderList() {
    // Call ActionCreator from container when user selects book
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


// - Whatever is returned from this function will be available
//   to component as props
// - Whenever state changes, this (and the component) will
// - instantly re-render
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// - Enable calling Action Creatorinside the container
// - Whatever is returned from this function will be available
//   to component as props
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result will be passed
  // to all reducers via dispatch function
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Container is exported, not component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);