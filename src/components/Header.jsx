import React from 'react';
import Interactions from './Interactions';
import '../styles/components/header.scss';
import leafgreen from '../assets/static/leafgreen.png';

const Header = () => (
  <div className='header'>
    <div className='header__logo'>
      <p className='header__logo--title'>lifegrin</p>
      {/* <img className='header__logo--img' src={leafgreen} alt='leaf' /> */}
    </div>
    <Interactions />
  </div>
);

export default Header;
