import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atom/Button';
import { Buttons, CartItemsWrapper, LightText, MiniCart, Title, TotalCost, Wrapper } from './CartOverlayStyle';

class CartOverlay extends Component {
  render() {
    return (
      <Wrapper>
        <MiniCart>
          <Title>My Bag,<LightText>3 items</LightText></Title>
          <CartItemsWrapper></CartItemsWrapper>
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