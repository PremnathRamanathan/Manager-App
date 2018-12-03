import React, { Component } from 'react';
//import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
//import { Header } from './components/common';
//import LoginForm from './components/LoginForm';
import Router from './Router';


type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    // Initialize Firebase
   const config = {
     apiKey: 'AIzaSyA73itsa7CsxyXxKADE0NvNuPyvSUGkgBk',
     authDomain: 'auth-c1519.firebaseapp.com',
     databaseURL: 'https://auth-c1519.firebaseio.com',
     projectId: 'auth-c1519',
     storageBucket: 'auth-c1519.appspot.com',
     messagingSenderId: '632036770065'
   };
   Firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
