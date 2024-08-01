
// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "animate.css";
import Header from "./components/common/header/Header";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import CourseHome from "./components/allcourse/CourseHome";
import Instruments from "./components/team/Team";
import Login from "./components/login/login";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import CoursesCard from "./components/allcourse/CoursesCard";
import EnrollNow from "./components/enrollnow/Enrollnow";
import Certificate from "./components/certificate/Certificate"; // Import CertificatePage component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<CourseHome />} />
        <Route exact path="/team" element={<Instruments addToCart={addToCart} />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/journal" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/courses-card" element={<CoursesCard />} />
        <Route exact path="/enroll-now" element={<EnrollNow />} />
        <Route exact path="/certificate" element={<Certificate />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
