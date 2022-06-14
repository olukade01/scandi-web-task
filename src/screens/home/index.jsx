import React, { Component, Fragment } from "react";
import ProductCard from "../../components/molecules/productCard/ProductCard";
import { productToShow } from "../../data/products";
import { Title, Wrapper } from "./HomeStyle";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Title>WOMEN</Title>
        <Wrapper>
          {productToShow.map((product, index) => (
            <ProductCard key={`product-index${index}`} product={product} />
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default index;
