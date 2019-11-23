/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import '../styles/components/slider.scss';
import imageStorage from '../assets/imagestorage';

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: -1,
    autoplay: true,
    arrows: false,
  };
  const imagesLinks = imageStorage.names;
  return (
    <div className='slider'>
      <Slider {...settings}>
        {
          imagesLinks.map((slide) => {
            return (
              <div>
                <img src={slide} alt='slideImages' />
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
};

export default MainSlider;
