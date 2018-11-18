import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../pages/logo.png'

class NavBar extends Component {
    render() {
        return (
            <div>
            <nav>
                <div class="nav-wrapper light-blue">
                    <div className="container">
                    <a href="#!" className="brand-logo"><img  src={logo} width="150"/></a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/vendas">Vendas</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><a href="badges.html">Sair</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default NavBar;