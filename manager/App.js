
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import * as actions from './src/actions';
import Router from './src/Router';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
