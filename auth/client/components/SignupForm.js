import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import CurrentUserQuery from '../queries/CurrentUser';
import SignupMutation from '../mutations/Signup';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
    };
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUserQuery }]
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div className="row">
        <h3>Signup</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(SignupMutation)(SignupForm);
