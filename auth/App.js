
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

type Props = {};
export default class App extends Component<Props>  {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBia2zvVaTUf9Qpl9sG3smcGc6dyjhM5Gs",
      authDomain: "udemyauth-31397.firebaseapp.com",
      databaseURL: "https://udemyauth-31397.firebaseio.com",
      projectId: "udemyauth-31397",
      storageBucket: "udemyauth-31397.appspot.com",
      messagingSenderId: "915661557885"
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

