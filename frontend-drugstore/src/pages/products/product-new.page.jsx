import React, { Component } from 'react';


class NewProductPage extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="center-align">Criar Produto</h3>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="nome" type="text" class="validate" />
                            <label for="nome">Nome</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s10">
                            <textarea id="imagem" class="materialize-textarea"></textarea>
                            <label for="imagem">Imagem</label>
                        </div>
                        <div class="input-field col s2">
                            <a class="waves-effect waves-light btn">Buscar</a>
                        </div>


                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="descricao" class="materialize-textarea"></textarea>
                            <label for="descricao">Descrição</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="preco" type="text" class="validate" />
                            <label for="preco">Preço</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="anvisa_code" type="text" class="validate" />
                            <label for="anvisa_code">Codigo Anvisa</label>
                        </div>
                    </div>
                    <a class="btn-flat ">Cancelar</a>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Salvar</button>
                </form>

            </div>);
    }
}


export default NewProductPage;