
import React from 'react';
import Grid from '@material-ui/core/Grid';
import stain from '../assets/static/stain1.png';
import product from '../assets/static/slider/desodorante.jpg';
import '../styles/containers/categorieList.scss';
import '../styles/containers/checkout.scss';
import '../styles/containers/product.scss';
import sending from '../assets/static/buyIcons/sending.png';

const Checkout = () => {
  return (
    <div className='product'>
      {/* left side */}
      <div className='product__info checkout__info'>
        <div className='homeCategories__title categorieList__title product__title'>
          <h1>Mineral desodorant </h1>
          <img src={stain} alt='stain' className='product--bg' />
        </div>
        <div className='product__details'>
          <img className='checkout__img' src={product} alt='product selected' />
          <h1 className='product__details--price'>$245</h1>
          <div className='product__details--send'>
            <img src={sending} alt='stain' className='product__icon' />
            Envios a todo el pais
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='product__image checkout__image'>
        <form className='product__form checkout__form'>
          <Grid container>
            <p>Personal information</p>
            <Grid item md={12}>
              <input className='checkout__input' type='text' placeholder='Full name' />
            </Grid>
            <Grid item md={6}>
              <input className='checkout__input' type='text' placeholder='adress' />
            </Grid>
            <Grid item md={6}>
              <input className='checkout__input' type='text' placeholder='postal service' />
            </Grid>
            <Grid item md={12}>
              <input className='checkout__input' type='text' placeholder='state ' />
            </Grid>
            <p>Card information</p>
            <Grid item md={12}>
              <input className='checkout__input' type='text' placeholder='Card number' />
            </Grid>
            <Grid item md={6}>
              <input className='checkout__input' type='text' placeholder='Security code' />
            </Grid>
            <Grid item md={6}>
              <input className='checkout__input' type='text' placeholder='Expiration date' />
            </Grid>
          </Grid>

          <div className='product__form--buttons'>
            <button type='submit'>continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Checkout;

