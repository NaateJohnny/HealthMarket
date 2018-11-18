import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/sidenav/navbar.component';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import OrderPage from './pages/orders/orders.page';
import ProductPage from './pages/products/products.page';
import Login from  './pages/login.page'

class App extends Component {
  componentWillMount(){
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <NavBar/>
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/vendas" component={OrderPage}/>
          <Route path="/produtos" component={ProductPage}/>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
