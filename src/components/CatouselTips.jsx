/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import imageStorage from '../assets/imagestorage';
import stain from '../assets/static/stain2.png';
import '../styles/components/homecategories.scss';
import '../styles/components/slider.scss';

const SlideTips = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  const imagesLinks = imageStorage.tips;
  return (
    <>
      <div className='homeCategories__title slider__title'>
        <h1>do you wanna learn a little bit? </h1>
        <img src={stain} alt='stain' />
      </div>
      <div className='slider__tips'>
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
    </>
  );
};

export default SlideTips;
