import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PinwheelNavbar from 'react-pinwheel-navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const color = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
root.render(
  <React.StrictMode>
    <PinwheelNavbar color={color} number={10}></PinwheelNavbar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
