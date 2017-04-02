import React, { Component } from 'react';
import { connect } from 'react-redux';

// ComposedComponent is component that will be wrapped by HOC
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      // ...this.props ensures that props of ComposedComponent are
      // still available after wrapping it with HOC
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
