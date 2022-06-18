import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./screens/cart";
import Home from "./screens/home";
import PDP from "./screens/PDP";

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={PDP} />
      </Switch>
    );
  }
}
