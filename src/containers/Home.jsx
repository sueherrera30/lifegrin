import React from 'react';
import '../styles/containers/home.scss';
import world from '../assets/static/greenWorld.png';
import MainSlider from '../components/Catousel';
import HomeCategories from '../components/HomeCategories';
import SlideTips from '../components/CatouselTips';

const Home = () => (
  <div className='home'>
    <div className='home__main'>
      <img id='worldSpinning' src={world} alt='world-green' />
      <h4>buy consciously:</h4>
      <p>Be friendly with home</p>
    </div>
    <MainSlider />
    <HomeCategories />
    <SlideTips />
  </div>
);
export default Home;
