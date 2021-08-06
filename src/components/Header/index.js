import React from 'react';
import { Helmet } from 'react-helmet';

const Header = () => (
  <Helmet>
    <title>Random Quote</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </Helmet>
);

export default Header;
