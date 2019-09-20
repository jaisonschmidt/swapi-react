import React from 'react';

import Logo from '../../assets/img/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="-topmessage">Swapi Integration - Jaison Schmidt</div>
      <img src={Logo} className="-logo" alt="" />
    </header>
  );
};

export default Header;
