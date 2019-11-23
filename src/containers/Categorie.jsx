import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import stain from '../assets/static/stain2.png';
import product from '../assets/static/slider/desodorante.jpg';
import '../styles/containers/categorieList.scss';
import imageStorage from '../assets/imagestorage';

const Categorie = () => {
  const list = imageStorage.listIcons;
  return (
    <div className='categorieList'>
      <div className='categorieList__info'>
        <div className='homeCategories__title categorieList__title'>
          <h1>Beauty </h1>
          <img src={stain} alt='stain' />
        </div>
        <div className='categorieList__lateralList'>
          <h3> Categorie List:</h3>
          <ul>
            {
              list.map((category) => {
                return (
                  <li>
                    <img src={category.img} alt='category-icon' />
                    <Link to='/'>
                      <p>{category.name}</p>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
      <div className='categorieList__list'>
        <p className='categorieList__results'> 20 articulos encontrados</p>
        <Grid container>
          {
            Array.from(Array(16), (e, i) => {
              return (
                <Grid item lg={4}>
                  <Link to='/product' style={{ textDecoration: 'none' }}>
                    <Paper className='categorieList__product'>
                      <span>Product´s Title</span>
                      <img src={product} alt='stain' />
                      <div className='categorieList__product--info'>
                        <p className='categorieList__product--price'>$234.00</p>
                        <p>Description of the product</p>
                      </div>
                    </Paper>
                  </Link>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    </div>
  );
};

export default Categorie;
