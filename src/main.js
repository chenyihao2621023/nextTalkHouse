import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './components/index';
import '../static/fonts/iconfont.css'
import initReactFastclick from 'react-fastclick';
initReactFastclick();

ReactDOM.render(
  <App />
, document.getElementById('app'));