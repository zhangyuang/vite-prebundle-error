import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  pathToRegexp  from 'path-to-regexp';
import { generatePath } from 'react-router';
console.log(generatePath,pathToRegexp)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
