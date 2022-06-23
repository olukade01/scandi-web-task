import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../../../store/actions";
import { totalCartAmount } from "../../../utils";
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
    const cartItemToShow =
      this.props.cart.length > 2
        ? this.props.cart.slice(0, 2)
        : this.props.cart;
    const currency = this.props.selectedCurrency;
    const total = totalCartAmount(this.props.cart, currency);

    return (
      <Wrapper>
        <MiniCart>
          <Title>
            My Bag, <LightText>{this.props.cart.length} items</LightText>
          </Title>
          <CartItemsWrapper>
            {cartItemToShow.map((items, index) => (
              <CartItem key={`cartItemsIndex${index}`} items={items} />
            ))}
          </CartItemsWrapper>
          {this.props.cart.length !== 0 && (
            <TotalCost>
              <Title>Total</Title>
              <Title>{`${currency} ${total}`}</Title>
            </TotalCost>
          )}
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
  cart: state.cart,
  selectedCurrency: state.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
