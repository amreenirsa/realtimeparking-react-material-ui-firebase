import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVRZZ6iuaOTziYvddLs1kcjHPWykfMKFA",
    authDomain: "realtimeparking-d7a27.firebaseapp.com",
    databaseURL: "https://realtimeparking-d7a27.firebaseio.com",
    projectId: "realtimeparking-d7a27",
    storageBucket: "",
    messagingSenderId: "843591430935"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
