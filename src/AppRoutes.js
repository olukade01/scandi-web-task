import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart";
import Home from "./screens/home";
import PDP from "./screens/PDP";

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/product/:id" element={PDP} />
        <Route path="/cart" element={Cart} />
        <Route path="/" element={Home} />
      </Routes>
    );
  }
}
