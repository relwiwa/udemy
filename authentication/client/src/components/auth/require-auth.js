import React, { Component } from 'react';
import { connect } from 'react-redux';

// ComposedComponent is component that will be wrapped by HOC
export default function(ComposedComponent) {
  class Authentication extends Component {
    // via static contextTypes is available on the Authentication
    // class itself, like Authentication.context
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // ...this.props ensures that props of ComposedComponent are
      // still available after wrapping it with HOC
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
