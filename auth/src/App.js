
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  
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
      <View style={styles.container}>
        <Header headerText='header' style={styles.welcome} />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
