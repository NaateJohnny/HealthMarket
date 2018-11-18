import React, { Component } from 'react';


class ProductPage extends Component {
    render() {
        return (
            <div>
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

                    <tbody>
                    <ProductList name="Seila" />
                    <ProductList name="Seila" />
                    </tbody>
        
                </table>
                 <button class="btn waves-effect waves-light" type="submit" name="action">Novo</button>
            </div>
        );
    }
}
const ProductList = ({ name }) => (
    <tr>
        <td>1234567</td>
        <td>Adonias Lemos da Silva</td>
        <td>Rua Eucalipto, 76 - Cajazeiras</td>
        <td>R$ 49.90</td>
        <td><a>visualizar</a> | <a>deletar</a></td>
    </tr>
);
export default ProductPage;