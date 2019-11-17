import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import LogIn from '../containers/LogIn';
import Register from '../containers/Register';
import Categorie from '../containers/Categorie';
import Checkout from '../containers/Checkout';
import Confirmation from '../containers/Confirmation';
import Information from '../containers/Information';
import ProductDetails from '../containers/ProductDetails';
import NotFound from '../containers/NotFound';

const App = () => (
 <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/categorie' component={Categorie} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/confirmation' component={Confirmation} />
      <Route exact path='/information' component={Information} />
      <Route exact path='/product' component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>   
  </Layout>
 </BrowserRouter>
  
);

export default App;
