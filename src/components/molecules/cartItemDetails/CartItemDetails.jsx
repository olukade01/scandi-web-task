import React, { Component } from 'react'
// import { cartItemsData } from '../../../data/cart-items'
import { Color, ItemDesc, ItemName, ItemPrice, Size, Sizes, Wrapper } from './CartDetailsStyle'

export default class CartItemDetails extends Component {
  render() {
    return (
      <Wrapper large={this.props.large}>
        <ItemName large={this.props.large}>{this.props.items.title}</ItemName>
        <ItemDesc>{this.props.items.desc}</ItemDesc>
        <ItemPrice pdp={this.props.pdp} large={this.props.large}>{this.props.items.amount}</ItemPrice>
        <span>Size:</span>
        <Sizes large={this.props.large}>
        {this.props.items.sizes.map(size => <Size large={this.props.large}>{size}</Size>)}
        </Sizes>
        <span>Color:</span>
        <Sizes large={this.props.large}>
          {this.props.items.colors.map((color, index) => <Color large={this.props.large} key={`colorIndex-${index}`} background={color}/>)}
        </Sizes>
      </Wrapper>
    )
  }
}
