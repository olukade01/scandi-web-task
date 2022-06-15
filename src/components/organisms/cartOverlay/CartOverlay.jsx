import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cartItemsData } from "../../../data/cart-items";
import Button from "../../atom/Button";
import CartItem from "../../molecules/cartItem/CartItem";
import {
  Buttons,
  ButtonWrapper,
  CartItemsWrapper,
  LightText,
  MiniCart,
  Title,
  TotalCost,
  Wrapper,
} from "./CartOverlayStyle";

class CartOverlay extends Component {
  render() {
    return (
      <Wrapper>
        <MiniCart>
          <Title>
            My Bag, <LightText>3 items</LightText>
          </Title>
          <CartItemsWrapper>
            {cartItemsData.map((items, index) => (
              <CartItem key={`cartItemsIndex${index}`} items={items} />
            ))}
          </CartItemsWrapper>
          <TotalCost>
            <Title>Total</Title>
            <Title>$200</Title>
          </TotalCost>
          <Buttons>
            <Link style={{ textDecoration: "none" }} to="">
              <ButtonWrapper>
                <Button
                  background="transparent"
                  border="1px solid black"
                  title="VIEW BAG"
                  color="black"
                />
              </ButtonWrapper>
            </Link>
            <ButtonWrapper>
              <Button title="CHECK OUT" />
            </ButtonWrapper>
          </Buttons>
        </MiniCart>
      </Wrapper>
    );
  }
}

export default CartOverlay;
