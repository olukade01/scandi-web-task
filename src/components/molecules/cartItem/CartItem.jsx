import React, { Component } from 'react';
import CartItemDetails from '../cartItemDetails/CartItemDetails';
import { AddButton, ArrowLeft, ArrowRight, ItemDisplayWrapper, ItemImage, ItemImgWrapper, ItemQuantity, ItemQuantityWrapper, Wrapper } from './CartItemStyle';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state={
      
    }
  }
  render() {
    return (
      <Wrapper>
        <CartItemDetails/>
        <ItemImgWrapper>
          <ItemQuantityWrapper>
            <AddButton large={this.props.large}>+</AddButton>
            <ItemQuantity>2</ItemQuantity>
            <AddButton large={this.props.large}>-</AddButton>
          </ItemQuantityWrapper>
          <ItemDisplayWrapper>
            <ArrowLeft alt='arrow'/>
            <ArrowRight alt='arrow'/>
            <ItemImage alt='cart-item-img'/>
          </ItemDisplayWrapper>
        </ItemImgWrapper>
      </Wrapper>
    );
  }
}

export default CartItem;