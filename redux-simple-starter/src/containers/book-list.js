import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
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

// Container is exported, not component
export default connect(mapStateToProps)(BookList);