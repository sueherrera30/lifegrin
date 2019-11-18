import React from 'react';
import '../styles/containers/login.scss';
import facebook from '../assets/static/facebook2.png';
import google from '../assets/static/search.png';

const LogIn = () => (
  <div className='login'>
    <form className='login__form'>
      <h4> Register </h4>
      <input className='login__input' type='text' placeholder='email' />
      <input className='login__input' type='text' placeholder='password' />
      <input className='login__input' type='text' placeholder='confirm password' />
      <button type='submit'> log in </button>
      <p> log in with:</p>
      <div className='login__social'>
        <img src={facebook} alt='facebook' />
        <img src={google} alt='google' />
      </div>
    </form>
  </div>
);
export default LogIn;
