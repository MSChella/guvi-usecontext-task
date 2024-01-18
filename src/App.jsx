import React from 'react';


import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage';
import Login from './Pages/Login';
import NavBar from './components/Header/NavBar';
import Signup from './Pages/Sign-Up';
import Cart from './Pages/CartPage';


function App() {
  return (
    <div>
      <NavBar />

      <div className='mb-3'></div>
      <Routes>
        <Route Component={Home} path="/home" />
        <Route Component={Login} path="/" />
        <Route Component={Signup} path="/sign-up" />
        <Route Component={Cart} path="/cart" />

      </Routes>


    </div>
  );
}

export default App;
