import React, { Component } from 'react';
import { CartIcon, Image, ImgWrapper, PrdDesc, Price, Title, Wrapper } from './ProductCardStyle';

class ProductCard extends Component {
  render() {
    const product = this.props.product
    return (
      <Wrapper outOfStock={!product.inStock}>
        <ImgWrapper outOfStock={!product.inStock}>
          <CartIcon alt='cart-icon'/>
          <Image alt='product-image'/>
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