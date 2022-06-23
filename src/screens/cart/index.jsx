import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/atom/Button";
import CartItem from "../../components/molecules/cartItem/CartItem";
// import { mutateProductQuantity } from "../../store/actions";
import { CartOrder } from "../../data/cart-items";
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
          {!this.props.cart.length && <EmptyCart>No Item in Cart</EmptyCart>}
          {this.props.cart.map((items, index) => (
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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

// const mapDispatchToProps = (dispatch) => ({
//   mutateQuantity: (mutationType, productId) =>
//     dispatch(mutateProductQuantity(mutationType, productId)),
// });

export default connect(mapStateToProps, null)(index);
