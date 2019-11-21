 import React from 'react';
import Interactions from './Interactions';
import '../styles/components/header.scss';

const Header = () => (
  <div className='header'>
    <div className='header__logo'>
      <p className='header__logo--title'>lifegrin</p>
    </div>
    <Interactions />
  </div>
);

export default Header;
