import React, { Component } from 'react';
import axios from 'axios';

class OrdersPage extends Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:3333/products').then(function (response) {
            console.log(response);
        });
    }

    render() {
        return (<div>
            <div className="container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Codigo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Cliente</label>
                        </div>
                        <div className="input-field col s2">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Buscar
            <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <table className="container">
                <thead>
                    <tr>
                        <th>Cod. Venda</th>
                        <th>Cliente</th>
                        <th>Endereço</th>
                        <th>Total</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <OrderList name="Seila" />
                <OrderList name="Seila" />
                <tbody>

                </tbody>
            </table>
        </div>);
    }
}

const OrderList = ({ name }) => (
    <tr>
        <td>1234567</td>
        <td>Adonias Lemos da Silva</td>
        <td>Rua Eucalipto, 76 - Cajazeiras</td>
        <td>R$ 49.90</td>
        <td><a>visualizar</a> | <a>deletar</a></td>
    </tr>
);

export default OrdersPage;