import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import { Provider } from 'react-redux';
import reducers from './reducers/';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreMiddleware = applyMiddleware(ReduxPromise)(createStore);

const app = (
    <Provider store={createStoreMiddleware(reducers)}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.querySelector('.main'));
