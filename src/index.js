import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import config from './firebase.config';
import { Provider } from 'react-redux';


import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
