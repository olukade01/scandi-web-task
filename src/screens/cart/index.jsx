import React, { Component } from "react";
import Button from "../../components/atom/Button";
import CartItem from "../../components/molecules/cartItem/CartItem";
import { cartItemsData } from "../../data/cart-items";
import { CartWrapper, EmptyCart, Title, TotalOrder } from "./CartStyle";

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
            <Button title="ORDER" />
          </TotalOrder>
        </CartWrapper>
      </div>
    );
  }
}

export default index;
