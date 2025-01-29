import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage, Cart, Contact, Home, Login, Product, Products, Register } from "./pages";

// GitHub Pages works better with HashRouter because it uses the # in the URL to handle routing on the client side

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
