import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
import './index.css';

import store from './models/index';
// import store from './store'

import { Provider } from 'react-redux';
// import { Provider } from './react-redux';
// import Provider from './Provider';

import reportWebVitals from './reportWebVitals';



import Index from './Counter'
// import Index from './Index/index'
// import Index from './mainIndex'




ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )


reportWebVitals();
