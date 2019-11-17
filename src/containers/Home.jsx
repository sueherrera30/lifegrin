import React from 'react';
import '../styles/containers/home.scss';
import world from '../assets/static/greenWorld.png';
import MainSlider from '../components/Catousel';
import HomeCategories from '../components/HomeCategories';

const Home = () => (
  <div className='home'>
    <div className='home__main'>
      <img id='worldSpinning' src={world} alt='world-green' />
      <p>Be friendly with home</p>
    </div>
    <MainSlider />
    <HomeCategories />
  </div>
);
export default Home;
