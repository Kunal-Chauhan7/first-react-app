import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //loding the app file

const root = ReactDOM.createRoot(document.getElementById('root')); 
//making a root  of the reat app where the app will start
root.render(
  //this strict mode means run on the stable version of react 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <App /> is laoding the app
);