import React, {Component} from 'react';
import axios from 'axios';

class OrdersPage extends Component{
    constructor(){
        super();
        this.state = {
            orders: []
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3333/products').then(function (response) {
            console.log(response);
          });
    }

    render(){
        return(<div>
            Hello
        </div>);
    }
}


export default OrdersPage;