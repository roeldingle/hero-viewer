import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDLROYpS_Z5rdS6C-SF0EAlUGllpPGmWHg",
  authDomain: "heroviewer.firebaseapp.com",
  databaseURL: "https://heroviewer.firebaseio.com",
  projectId: "heroviewer",
  storageBucket: "",
  messagingSenderId: "624663198908"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
