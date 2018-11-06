import React, { Component } from 'react';
import './index.css';

class SideBar extends Component {
    render() {
        return (
        <div className="sidenav">
            <a href="/dash">Home</a>
            <a href="/dashboard">Orders</a>
            <a href="/dashboard">Products</a>
            <a href="/dashboard">Stock</a>
            <a href="/dashboard">Log out</a>
        </div>

        );
    }
}

export default SideBar;