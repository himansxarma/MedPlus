import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerAndShop from "./components/BannerAndShop"; // Ensure this file exists
import Medicine from "./components/Medicine"; // Ensure this file exists
import Cart from "./components/Cart"; // Ensure this file exists
import Header from "./components/Header"; // Ensure this file exists
import Footer from "./components/Footer"; // Ensure this file exists
import Prescription from "./components/Prescription"; // New Prescription component

function App() {
  const [cart, setCart] = useState([]);

  // Add items to the cart and update quantities
  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === medicine.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === medicine.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...medicine, qty: 1 }];
      }
    });
  };

  return (
    <Router>
      {/* Render the Header on all pages, including cart count */}
      <Header cartCount={cart.length} />

      {/* Set up routes for the application */}
      <Routes>
        {/* Default route that shows BannerAndShop */}
        <Route path="/" element={<BannerAndShop addToCart={addToCart} />} />

        {/* Route for Medicine page */}
        <Route path="/medicine" element={<Medicine addToCart={addToCart} />} />

        {/* Route for Cart page */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* Route for Prescription page */}
        <Route path="/prescription" element={<Prescription />} />
      </Routes>

      {/* Render the Footer on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
