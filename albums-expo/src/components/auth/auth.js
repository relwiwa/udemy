import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import { firebaseKeysAuth } from '../../../keys';

import Button from '../../reusable-components/button';
import Card from '../../reusable-components/card';
import CardSection from '../../reusable-components/card-section';
import Header from '../../reusable-components/header';
import LoginForm from './login-form';
import Spinner from '../../reusable-components/spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentDidMount() {
    firebase.initializeApp(firebaseKeysAuth);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else 
      this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                onPress={() => firebase.auth().signOut()}
              >
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header
          headerText="Authentication"
        />
        {this.renderContent()}
      </View>    
    )
  }
}


export default Auth;
