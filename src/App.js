import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; 
import ProductDetails from './user-components/ProductDetails';
import FrontStore from './pages/FrontStore';
import CartPage from './pages/CartPage';
import EmptyCart from './user-components/ShoppingCart/EmptyCart';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (

    <Routes>

      <Route path="/" element={<Login />} />      
      <Route path="/register" element={<Register />} />      
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/frontstore" element={<FrontStore />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      
      <Route path="/cart" element={<CartPage />} />
      <Route path="/empty-cart" element={<EmptyCart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
    
  );
};

export default App;
