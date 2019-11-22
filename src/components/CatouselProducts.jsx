/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import '../styles/components/slider.scss';
import imageStorage from '../assets/imagestorage';

const SliderProducts = () => {
  const { relatedProducts } = imageStorage;
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className='product__slider'>
      <Slider {...settings}>
        {
          relatedProducts.map((slide) => {
            return (
              <div className='product__paper' key={slide}>
                <img src={slide} alt='slideImages' />
                <h2>$55</h2>
                <p>crema corporal órganica</p>
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
};

export default SliderProducts;
