import React, { Component } from "react";
import {
  CartIcon,
  Image,
  ImgWrapper,
  PrdDesc,
  Price,
  Title,
  Wrapper,
} from "./ProductCardStyle";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleProductDetails = this.handleProductDetails.bind(this);
  }

  handleProductDetails(e) {
    if (e.target.alt === "cart-icon") return null;
    var { id } = this.props.product;

    console.log(id);
    var { history } = this.props;
    history.push(`/product/${id}`);
    console.log(history);
    // this.props.history.push(`/product/${id}`);
  }

  render() {
    const product = this.props.product;

    return (
      <Wrapper
        outOfStock={!product.inStock}
        onClick={(e) => this.handleProductDetails(e)}
      >
        <ImgWrapper outOfStock={!product.inStock}>
          <CartIcon src="/assets/vectors/green-cart.svg" alt="cart-icon" />
          <Image src={product.img} alt="product-image" />
        </ImgWrapper>
        <PrdDesc>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
        </PrdDesc>
      </Wrapper>
    );
  }
}

export default ProductCard;
