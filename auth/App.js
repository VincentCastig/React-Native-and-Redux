
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

type Props = {};
export default class App extends Component<Props>  {
  state={ LoggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBia2zvVaTUf9Qpl9sG3smcGc6dyjhM5Gs",
      authDomain: "udemyauth-31397.firebaseapp.com",
      databaseURL: "https://udemyauth-31397.firebaseio.com",
      projectId: "udemyauth-31397",
      storageBucket: "udemyauth-31397.appspot.com",
      messagingSenderId: "915661557885"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ LoggedIn: true });
      } else {
        this.setState({ LoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.LoggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

