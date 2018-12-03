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
     apiKey: '',// Enter API key from Firebase
     authDomain: '',// enter AuthDomain from Firebase
     databaseURL: '', // enter databaseURL from Firebase
     projectId: '', //enter projectId from Firebase
     storageBucket: '',
     messagingSenderId: ''
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
