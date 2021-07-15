import React from 'react';
import trumpLogo from '../../tronald-dump-logo.png';
import './Logo.css';

const Logo = () => (
  <header className="header">
    <div className="logo-container">
      <img className="logo" alt="Donald Trump" src={trumpLogo} width="150" height="150" />
    </div>
  </header>
);

export default Logo;
