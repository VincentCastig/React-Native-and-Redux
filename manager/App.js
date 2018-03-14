
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAw8tv7Wgcjrdf5PjNcBtMrhgamsWBzpG4",
      authDomain: "manager-a7229.firebaseapp.com",
      databaseURL: "https://manager-a7229.firebaseio.com",
      projectId: "manager-a7229",
      storageBucket: "manager-a7229.appspot.com",
      messagingSenderId: "1048620897068"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hey!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
