import React, { Component } from "react";
import { Content, Main, Wrapper } from "./LayoutStyle";
import Navbar from "../navbar/Navbar";
import CartOverlay from "../cartOverlay/CartOverlay";
import { connect } from "react-redux";

class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar history={this.props.history} />
        <Main>
          {this.props.isCartOpen && <CartOverlay />}
          <Content>{this.props.children}</Content>
        </Main>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: state.isCartOpen,
});

export default connect(mapStateToProps, null)(index);
