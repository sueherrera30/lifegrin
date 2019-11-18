import React from 'react';
import '../styles/components/footer.scss';
import facebook from '../assets/static/facebook.png';
import twitter from '../assets/static/twitter.png';
import instagram from '../assets/static/instagram.png';

const Footer = () => (
  <div className='footer'>
    <div className='footer__section footer__social'>
      <p className='header__logo--title footer__logo'>lifegrin</p>
      <p>You can find us here</p>
      <div className='footer__socialIcons'>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
      </div>
    </div>
    <div className='footer__contact'>
      <p>lifegrin@gmail.com</p>
      <p> 55 78 23 56</p>
      <p> CDMX</p>
    </div>
  </div>
);

export default Footer;
