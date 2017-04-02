import React, { Component } from 'react';

// ComposedComponent is component that will be wrapped by HOC
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      // ...this.props ensures that props of ComposedComponent are
      // still available after wrapping it with HOC
      return <ComposedComponent {...this.props} />
    }
  }
  return Authentication;
}
