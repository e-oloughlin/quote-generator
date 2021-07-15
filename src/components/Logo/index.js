import React from 'react';
import { Container } from '@material-ui/core';
import trumpLogo from '../../tronald-dump-logo.png';
import './Logo.scss';

const Logo = () => (
  <Container minWidth="sm">
    <header className="header">
      <div className="header__container">
        <img className="header__container__logo" alt="Donald Trump" src={trumpLogo} width="150" height="150" />
      </div>
    </header>
  </Container>
);

export default Logo;
