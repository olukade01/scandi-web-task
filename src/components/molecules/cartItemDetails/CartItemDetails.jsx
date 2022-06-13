import React, { Component, Fragment } from 'react'
import { cartItemsData } from '../../../data/cart-items'
import { ItemDesc, ItemName, ItemPrice, Size, Sizes, Wrapper } from './CartDetailsStyle'

export default class CartItemDetails extends Component {
  render() {
    return (
      <Wrapper>
        {cartItemsData.map((items, index) => 
          <Fragment key={`cartItems-${index}`}>
        <ItemName>{items.title}</ItemName>
        <ItemDesc>{items.desc}</ItemDesc>
        <ItemPrice>{items.amount}</ItemPrice>
        <span>Size:</span>
        <Sizes>
        {items.sizes.map(size => <Size>{size}</Size>)}
        </Sizes>
        <span>Color:</span>
        <Sizes></Sizes>
        </Fragment>
      )}
      </Wrapper>
    )
  }
}
