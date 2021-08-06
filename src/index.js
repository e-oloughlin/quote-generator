import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './components/App';
import quote from './reducers/quote';
import appState from './reducers/app-state';

const rootReducer = combineReducers({
  quote,
  appState,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <title>Random Quote</title>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Helmet>
    <App />
  </Provider>,
  document.getElementById('root')
);
