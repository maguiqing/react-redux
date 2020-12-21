import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
import './index.css';
import Counter from './Counter';
// import store from './models/index';

import store from './store'

// import { Provider } from 'react-redux';
// import { Provider } from './react-redux';
import Provider from './Provider';

import reportWebVitals from './reportWebVitals';

import Index from './mainIndex'
// import Index from './Index/index'




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
