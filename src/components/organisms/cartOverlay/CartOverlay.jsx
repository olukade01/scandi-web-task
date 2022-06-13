import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cartItemsData } from '../../../data/cart-items';
import Button from '../../atom/Button';
import CartItem from '../../molecules/cartItem/CartItem';
import { Buttons, CartItemsWrapper, LightText, MiniCart, Title, TotalCost, Wrapper } from './CartOverlayStyle';

class CartOverlay extends Component {
  render() {
    return (
      <Wrapper>
        <MiniCart>
          <Title>My Bag,<LightText>3 items</LightText></Title>
          <CartItemsWrapper>
          {cartItemsData.map((items, index) => <CartItem key={`cartItemsIndex${index}`} items={items}/>)}         
            </CartItemsWrapper>
          <TotalCost>
            <Title>Total</Title>
            <LightText>$200</LightText>
          </TotalCost>
          <Buttons>
            <Link to=''>
              <Button title='you'/>
            </Link>
            <Button title='me' color='red'/>
          </Buttons>
        </MiniCart>
      </Wrapper>
    );
  }
}

export default CartOverlay;