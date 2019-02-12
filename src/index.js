import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'


import App from "./components/app";
import reducers from './reducers';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore)

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , rootElement);
