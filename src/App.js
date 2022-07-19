import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Navbar from "./components/layout/Navbar";

import Cart from "./components/others/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "./redux/reducers/CartSlice";
import Products from "./components/pages/products";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";


function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems]);

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <Navbar />
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/businesses-service" element={<Products/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
