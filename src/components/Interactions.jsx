import React from 'react';
import '../styles/components/header.scss';
import cart from '../assets/static/cart.png';
import person from '../assets/static/person.png';

const Interaction = () => (
  <div className='header__interaction'>
    <div className='header__search'>
      <input className='search' type='text' placeholder='Lets buy some nature' />
    </div>
    <img className='header__logo--img' src={cart} alt='cart' />
    <img className='header__logo--img' src={person} alt='list' />
  </div>
);
export default Interaction;
