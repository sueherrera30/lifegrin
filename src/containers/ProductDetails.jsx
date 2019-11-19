import React from 'react';
import stain from '../assets/static/stain1.png';
import product from '../assets/static/slider/desodorante.jpg';
import '../styles/containers/categorieList.scss';
import '../styles/containers/product.scss';
import visa from '../assets/static/buyIcons/visa.png';
import sending from '../assets/static/buyIcons/sending.png';
import american from '../assets/static/buyIcons/american.png';
import master from '../assets/static/buyIcons/master.png';
import credit from '../assets/static/buyIcons/credit.png';
import SliderProducts from '../components/CatouselProducts';

const ProductDetails = () => {
  return (
    <div className='product'>
      {/* left side */}
      <div className='product__image'>
        <img src={product} alt='product selected' />
        <h3>Productos relacionados</h3>
        <SliderProducts />
      </div>
      {/* right side */}
      <div className='product__info'>
        <div className='homeCategories__title categorieList__title product__title'>
          <h1>
            Mineral desodorant
          </h1>
          <img src={stain} alt='stain' className='product--bg' />
        </div>
        <div className='product__details'>
          <p className='product__details--stock'> stock disponible</p>
          <p>
            <img src={credit} alt='stain' className='product__icon' />
            12 meses sin intereses
          </p>
          <div className='product__cardImages'>
            <img src={visa} alt='stain' className='product__icon' />
            <img src={american} alt='stain' className='product__icon' />
            <img src={master} alt='stain' className='product__icon' />
          </div>
          <div className='product__details--send'>
            <img src={sending} alt='stain' className='product__icon' />
              Envios a todo el pais
          </div>
          <form className='product__form'>
            <h2 className='product__details--price'>$245</h2>
            <div className='product__details--quantity'>
              <span>Quantity:</span>
              <span> 1 </span>
              <button type='button' className='product__form--plus'> + </button>
            </div>
            <div className='product__form--buttons'>
              <button type='submit'>ADD TO CART</button>
              <button type='submit'>BUY</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default ProductDetails;
