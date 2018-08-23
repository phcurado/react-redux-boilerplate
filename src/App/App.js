import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Books from '../Containers/Books';
import BookDetail from '../Containers/BookDetail';
import './App.scss';
import img from '../img/koala-windows-7-vista-and-xp-picks-27753235-500-375.jpg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            world: 'Hello World',
            teste: 'asdas'
        };
    }
    render() {
        return (
            <div className="App">
                <img src={img} />
                <h1>{this.state.world}</h1>
                <p>This is the react-redux boiler plate</p>
                <h2>This is the list of books comming from Redux</h2>
                <Books />
                <h3>Book Clicked</h3>
                <BookDetail />
            </div>
        );
    }
}

export default hot(module)(App);
