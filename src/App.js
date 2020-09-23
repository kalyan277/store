import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Model from './components/Model';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" exact component={Details}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/*" component={Default}></Route>
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
