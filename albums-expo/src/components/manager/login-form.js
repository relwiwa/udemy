import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import Input from '../../reusable-components/input';
import Spinner from '../../reusable-components/spinner';

import { emailChanged, loginUser, passwordChanged } from '../../actions/manager';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="email@email.com"
            value={this.props.emails}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder="password"
            secureTextEntry
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorContainer: {
    backgroundColor: 'white',
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    error: state.auth.error,
    loading: state.auth.loading,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  loginUser,
  passwordChanged
})(LoginForm);
