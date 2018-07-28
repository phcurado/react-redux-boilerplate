import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            world: 'Hello World'
        };
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.world}</h1>
                <p>This is the react-redux boiler plate</p>
            </div>
        );
    }
}

export default hot(module)(App);
