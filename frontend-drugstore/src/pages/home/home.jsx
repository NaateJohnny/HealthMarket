import React, { Component } from 'react';
import './home.css';
class HomePage extends Component {
    render() {
        return (
            <div>
                <h2 className="center-align">Bem vindo ao Health Market</h2>

                
                <div className="row">
                    <div class="col s4">
                        <div class="card">
                            <div class="card-content black-text">
                                <span class="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>

                        </div>
                    </div>

                    <div class="col s4">
                        <div class="card ">
                            <div class="card-content black-text">
                                <span class="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                            </div>

                        </div>
                </div>

                    <div class="col s4">
                        <div class="card ">
                            <div class="card-content black-text">
                                <span class="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomePage;