
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';

type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){
    firebase.initializeApp ({
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
