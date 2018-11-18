import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png'

class Login extends Component {
    render() {
        return (<div className="light-blue">
            <div className="row">
                <div className="col s4"></div>
                <div className="col s4">
                <br/>
                <br/>
                <br/>
                    <div className="card">
                        <div className="card-content black-text">

                            <span className="card-title center-align  light-blue-text">Login</span>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate" />
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="password" type="password" class="validate" />
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <div class="row col s12">
                                        <button class="btn col s12 waves-effect waves-light light-blue " type="submit" name="action">Login</button>
                                    </div>
                                    <p className="center-align  light-blue-text">Quer fazer parte da nossa rede? <Link to="">Cadastre-se</Link></p>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col s4"></div>
            </div>
            <br/>
            <br/>
            <br/>

        </div>);
    }
}
export default Login;