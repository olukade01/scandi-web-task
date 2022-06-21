import React, { Component, Fragment } from "react";
import ProductCard from "../../components/molecules/productCard/ProductCard";
import { productToShow } from "../../data/products";
import { Title, Wrapper } from "./HomeStyle";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleProductDetails = this.handleProductDetails.bind(this);
  }

  // handleProductDetails(product) {
  //   // if (e.target.alt === "cart-icon") return null;
  //   // var { id } = this.props.product;

  //   // console.log(id);
  //   var { history } = this.props;
  //   // console.log(history);
  //   history.push(`/product/${product}`);
  //   // this.props.history.push(`/product/${id}`);
  // }

  render() {
    // console.log(this.props.history);
    return (
      <Fragment>
        <Title>WOMEN</Title>
        <Wrapper>
          {productToShow.map((product, index) => (
            <ProductCard
              // onClick={(product) => this.handleProductDetails(product.id)}
              key={`product-index${index}`}
              product={product}
            />
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default index;
