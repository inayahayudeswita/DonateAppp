import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Import komponen App
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

// Membungkus App dengan BrowserRouter untuk menyediakan routing
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
