import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider, { CartContext } from './components/Context/Cart.Context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>



  </Router>

);


reportWebVitals();
