/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import '../styles/components/slider.scss';
import imageStorage from '../assets/imagestorage';

// import bags from '../assets/static/slider/bolsas.jpg';
// import honey from '../assets/static/slider/miel.jpg';
// import sales from '../assets/static/slider/ofertas.jpg';
// import xmas from '../assets/static/slider/navidad.jpg';
// import market from '../assets/static/slider/mercado.jpg';
// import deodorant from '../assets/static/slider/desodorante.jpg';
// import glass1 from '../assets/static/slider/termo1.jpg';
// import glass2 from '../assets/static/slider/termo2.jpg';
// import glass3 from '../assets/static/slider/termo3.jpg';
// import cope from '../assets/static/slider/copa.jpg';

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
