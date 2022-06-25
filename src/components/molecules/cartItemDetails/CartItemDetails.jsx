import React, { Component } from "react";
import {
  checkSwatchType,
  itemsRender,
  renderAttributeValue,
} from "../../../utils/helpers";
import {
  ItemDesc,
  ItemName,
  ItemPrice,
  Label,
  Size,
  Sizes,
  SizesWrapper,
  Wrapper,
} from "./CartDetailsStyle";

export default class CartItemDetails extends Component {
  render() {
    const nameArr = String(this.props.item.name).split(" ");
    const productName = nameArr.length > 3 ? nameArr[0] : nameArr.join(" ");
    const productShortDesc =
      nameArr.length > 3 ? nameArr.slice(1).join(" ") : "";
    return (
      <Wrapper pdp={this.props.pdp} large={this.props.large}>
        <ItemName large={this.props.large}>{productName}</ItemName>
        <ItemDesc pdp={this.props.pdp}>{productShortDesc}</ItemDesc>
        {!this.props.pdp && (
          <ItemPrice pdp={this.props.pdp} large={this.props.large}>
            {`${this.props.price.currency.label} ${this.props.price.amount}`}
          </ItemPrice>
        )}
        {this.props.item.attributes.map((attribute) => (
          <SizesWrapper key={`attribute-index-${attribute.id}`}>
            <Label pdp={this.props.pdp} large={this.props.large}>
              {attribute.name}:
            </Label>
            <Sizes large={this.props.large}>
              {itemsRender(this.props.large, attribute.items).map((item) => (
                <Size
                  large={this.props.large}
                  key={`item-index-${item.id}`}
                  onClick={() => this.props.handleOption(attribute.name, item)}
                  style={
                    attribute.type === "swatch"
                      ? { backgroundColor: item.value }
                      : {}
                  }
                  swatchActive={checkSwatchType(
                    attribute,
                    item,
                    this.props.selectedOptionToShow
                  )}
                  active={
                    item.displayValue ===
                    this.props.selectedOptionToShow[attribute.name].displayValue
                  }
                  disabled={this.props.disabled && item.displayValue === "XS"}
                >
                  {renderAttributeValue(this.props.large, attribute, item)}
                </Size>
              ))}
            </Sizes>
          </SizesWrapper>
        ))}
      </Wrapper>
    );
  }
}
