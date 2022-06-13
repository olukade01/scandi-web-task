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
        <CartItemDetails items={this.props.items} large={this.props.large}/>
        <ItemImgWrapper>
          <ItemQuantityWrapper>
            <AddButton large={this.props.large}>+</AddButton>
            <ItemQuantity>{this.props.items.quantity}</ItemQuantity>
            <AddButton large={this.props.large}>-</AddButton>
          </ItemQuantityWrapper>
          <ItemDisplayWrapper>
            <ArrowLeft alt='arrow'/>
            <ArrowRight alt='arrow'/>
            <ItemImage src={this.props.items.image} alt='cart-item-img'/>
          </ItemDisplayWrapper>
        </ItemImgWrapper>
      </Wrapper>
    );
  }
}

export default CartItem;