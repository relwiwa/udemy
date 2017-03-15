import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

// Shortcut:
// - Replace mapDispatchToProps declaration with object declaration
// - Will still add the function to this.props
// - ES6 syntax: { fetchPosts: fetchPosts }
export default connect(null, { fetchPosts })(PostsIndex);