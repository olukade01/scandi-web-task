import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartItemsData } from "../../../data/cart-items";
import { toggleCart } from "../../../store/actions";
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
    const currency = this.props.selectedCurrency;

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
            <Title>{currency}200</Title>
          </TotalCost>
          <Buttons>
            <Link
              onClick={() => this.props.toggleCart()}
              style={{ textDecoration: "none" }}
              to="/cart"
            >
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

const mapStateToProps = (state) => ({
  selectedCurrency: state.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
