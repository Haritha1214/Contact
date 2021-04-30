import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { contactReducer } from './Reducers/index';

import { Provider } from "react-redux";
import {createStore} from 'redux';




let store=createStore(contactReducer)
ReactDOM.render(
    <Provider store={store}><App/></Provider>

,document.getElementById('root'))