import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart";
import Home from "./screens/home";
import PDP from "./screens/PDP";

class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<PDP />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}
export default AppRoutes;
