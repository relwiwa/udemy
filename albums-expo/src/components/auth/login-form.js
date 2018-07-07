import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';

import Spinner from '../../reusable-components/spinner';
import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import Input from '../../reusable-components/input';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
      loading: false,
      password: '',
    };
  }

  onButtonPress() {
    const { email, password } = this.state;
    
    this.setState({
      error: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }
  
  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      error: '',
      loading: false,
      password: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Log in
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={text => this.setState({ email: text })}
            placeholder="user@domain.com"
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={text => this.setState({ password: text })}
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
