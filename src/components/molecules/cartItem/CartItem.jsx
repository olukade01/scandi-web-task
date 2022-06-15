import React, { Component } from "react";
import CartItemDetails from "../cartItemDetails/CartItemDetails";
import {
  AddButton,
  ArrowLeft,
  ArrowRight,
  ItemDisplayWrapper,
  ItemImage,
  ItemImgWrapper,
  ItemQuantity,
  ItemQuantityWrapper,
  Wrapper,
} from "./CartItemStyle";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Wrapper large={this.props.large}>
        <CartItemDetails items={this.props.items} large={this.props.large} />
        <ItemImgWrapper>
          <ItemQuantityWrapper large={this.props.large}>
            <AddButton large={this.props.large}>+</AddButton>
            <ItemQuantity>{this.props.items.quantity}</ItemQuantity>
            <AddButton large={this.props.large}>-</AddButton>
          </ItemQuantityWrapper>
          <ItemDisplayWrapper large={this.props.large}>
            {this.props.large && (
              <>
                <ArrowLeft
                  // large={this.props.large}
                  src="/assets/vectors/arrow-right.svg"
                  alt="arrow"
                />
                <ArrowRight src="/assets/vectors/arrow-right.svg" alt="arrow" />
              </>
            )}
            <ItemImage src={this.props.items.image} alt="cart-item-img" />
          </ItemDisplayWrapper>
        </ItemImgWrapper>
      </Wrapper>
    );
  }
}

export default CartItem;
