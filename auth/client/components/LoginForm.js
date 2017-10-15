import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import CurrentUserQuery from '../queries/CurrentUser';
import LoginMutation from '../mutations/Login';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUserQuery }]
    })
    /*  - .then() is not working for redirecting to dashboard, as it would run parallel
          to refetchQueries -> race condition
        - use componentWillUpdate instead, as components update whenever an associated
          query (CurrentUserQuery) update */
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(CurrentUserQuery)(
  graphql(LoginMutation)(LoginForm)
);
