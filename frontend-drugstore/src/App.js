import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import Main from './components/main/main.component';
import SideBar from './components/sidenav/sidenav.component';
import OrdersPage from './pages/orders/orders.page';

class App extends Component {
  render() {
    return (
      <div>
       <SideBar/> 
          <Switch>
            <Route path='/orders' component={OrdersPage}/>
          </Switch> 
      </div>
    );
  }
}

export default App;
