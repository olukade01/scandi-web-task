import React, { Component } from "react";
import { Content, Main, Wrapper } from "./LayoutStyle";
import Navbar from "../navbar/Navbar";
import CartOverlay from "../cartOverlay/CartOverlay";

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Main>
          {/* <CartOverlay /> */}
          <Content>{this.props.children}</Content>
        </Main>
      </Wrapper>
    );
  }
}
