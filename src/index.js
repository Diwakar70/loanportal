import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactRouter from './router/router';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
