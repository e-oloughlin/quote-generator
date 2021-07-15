import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Tronald Dump</title>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
