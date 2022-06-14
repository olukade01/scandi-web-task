import React, { Component } from "react";
import { Content, Main, Wrapper } from "./LayoutStyle";
import Navbar from "../navbar/Navbar";

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Main>
          <Content>{this.props.children}</Content>
        </Main>
      </Wrapper>
    );
  }
}
