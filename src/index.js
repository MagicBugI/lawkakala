import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {PersistGate} from 'redux-persist/integration/react';
import {store , persistor} from './redux/store';
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

