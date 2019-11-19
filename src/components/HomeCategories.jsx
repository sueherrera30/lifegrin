import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import stain from '../assets/static/stain2.png';
import home from '../assets/static/categories/home.png';
import beauty from '../assets/static/categories/beauty.png';
import food from '../assets/static/categories/food.png';
import healthy from '../assets/static/categories/healthy.png';
import energy from '../assets/static/categories/energy.png';
import plants from '../assets/static/categories/plants.png';
import '../styles/components/homecategories.scss';

const useStyles = makeStyles((theme) => ({
  main: {
    background: 'linear-gradient(184deg, rgba(255,255,255,0.10547969187675066) 0%, rgba(194,242,97,0.53125) 100%)',
    paddingBottom: '50px',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    height: '600px',
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const HomeCategories = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className='homeCategories__title'>
        <h1>C a t e g o r i e s </h1>
        <img src={stain} alt='stain' />
      </div>
      <div className={classes.root}>
        <Grid container spacing={8} xs={10}>
          <Grid item xs={12} sm={4}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
                BEAUTY
                <img className='homeCategories__icon' src={beauty} alt='' />
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
                HOME
                <img className='homeCategories__icon' src={home} alt='' />
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
                FOOD
                <img className='homeCategories__icon' src={food} alt='' />
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
                HEALTH
                <img className='homeCategories__icon' src={healthy} alt='' />
              </Paper>
            </Link>  
          </Grid>
          <Grid item xs={6} sm={6}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
              ENERGY
                <img className='homeCategories__icon' src={energy} alt='' />
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Link to='/categorie'>
              <Paper className={`shake1 ${classes.paper}`}>
                PLANTS
                <img className='homeCategories__icon' src={plants} alt='' />
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomeCategories;
