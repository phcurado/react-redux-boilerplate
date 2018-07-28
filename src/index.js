import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';
import { createStore } from 'redux';

const app = (
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.querySelector('.main'));
