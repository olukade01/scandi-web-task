import React, { Component } from "react";
import Button from "../../components/atom/Button";
import CartItem from "../../components/molecules/cartItem/CartItem";
import { cartItemsData, CartOrder } from "../../data/cart-items";
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
    return (
      <div>
        <Title>CART</Title>
        <CartWrapper>
          {!cartItemsData.length && <EmptyCart>No Item in Cart</EmptyCart>}
          {cartItemsData.map((items, index) => (
            <CartItem key={`cartItemsIndex${index}`} large items={items} />
          ))}
          <TotalOrder>
            {CartOrder.map((order, index) => (
              <OrderDetails>
                <LightOrderDetails bold={index === CartOrder.length - 1}>
                  {order.name}:
                </LightOrderDetails>
                <span>{order.value}</span>
              </OrderDetails>
            ))}
            <ButtonWrapper>
              <Button title="ORDER" />
            </ButtonWrapper>
          </TotalOrder>
        </CartWrapper>
      </div>
    );
  }
}

export default index;
