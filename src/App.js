import './App.css';
import Navbar from './components/navbar';
import ProductCard from './components/productCard'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import MainPage from './pages/index';

function App() {



  return (
    
    <div className="App">
      <Navbar/>

        <Routes>
          <Route exact path="/"  element = { <MainPage />} />
          <Route  path="/cart"  element = { <Cart />} />
        </Routes> 
       

       
      </div>
    
    
  );


}

export default App;
