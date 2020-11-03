import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import store from './redux/store';
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

