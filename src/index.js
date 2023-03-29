import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './feature/cartSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const store = configureStore({
  reducer: {
    allCart: cartSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store = { store }>
<BrowserRouter>
    <App />
</BrowserRouter>
 </Provider>

);


