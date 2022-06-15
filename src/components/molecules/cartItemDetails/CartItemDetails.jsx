import React, { Component } from "react";
// import { cartItemsData } from '../../../data/cart-items'
import {
  Color,
  ItemDesc,
  ItemName,
  ItemPrice,
  Label,
  Size,
  Sizes,
  Wrapper,
} from "./CartDetailsStyle";

export default class CartItemDetails extends Component {
  render() {
    return (
      <Wrapper large={this.props.large}>
        <ItemName large={this.props.large}>{this.props.items.title}</ItemName>
        <ItemDesc pdp={this.props.pdp}>{this.props.items.desc}</ItemDesc>
        <ItemPrice pdp={this.props.pdp} large={this.props.large}>
          {this.props.items.amount}
        </ItemPrice>
        <Label pdp={this.props.pdp} large={this.props.large}>
          Size:
        </Label>
        <Sizes large={this.props.large}>
          {this.props.items.sizes.map((size) => (
            <Size large={this.props.large}>{size}</Size>
          ))}
        </Sizes>
        <Label pdp={this.props.pdp} large={this.props.large}>
          Color:
        </Label>
        <Sizes large={this.props.large}>
          {this.props.items.colors.map((color, index) => (
            <Color
              large={this.props.large}
              key={`colorIndex-${index}`}
              background={color}
            />
          ))}
        </Sizes>
      </Wrapper>
    );
  }
}
