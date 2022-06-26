import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/atom/Button";
import CartItem from "../../components/molecules/cartItem/CartItem";
import { CartOrder } from "../../data/cart-items";
import { totalCartAmount } from "../../utils";
import {
  ButtonWrapper,
  CartWrapper,
  EmptyCart,
  LightOrderDetails,
  OrderDetails,
  Title,
  TotalOrder,
} from "./CartStyle";

class index extends Component {
  render() {
    const currency = this.props.currency;
    const total = totalCartAmount(this.props.cart, currency).toLocaleString();
    const tax = (
      (21 / 100) *
      totalCartAmount(this.props.cart, currency)
    ).toLocaleString();
    return (
      <div>
        <Title>CART</Title>
        <CartWrapper>
          {!this.props.cart.length && <EmptyCart>No Item in Cart</EmptyCart>}
          {this.props.cart.map((items, index) => (
            <CartItem
              key={`cartItemsIndex${index}`}
              large
              cartItemId={items.id}
            />
          ))}
          {this.props.cart.length !== 0 && (
            <TotalOrder>
              {CartOrder.map((order, index) => (
                <OrderDetails key={`cart-order-index${index}`}>
                  <LightOrderDetails bold={index === CartOrder.length - 1}>
                    {order.name}:
                  </LightOrderDetails>
                  <span>
                    {index === 0
                      ? `${currency} ${tax}`
                      : index === 1
                      ? this.props.cart.length
                      : `${currency} ${total}`}
                  </span>
                </OrderDetails>
              ))}
              <ButtonWrapper>
                <Button title="ORDER" />
              </ButtonWrapper>
            </TotalOrder>
          )}
        </CartWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.selectedCurrency,
});

export default connect(mapStateToProps, null)(index);
