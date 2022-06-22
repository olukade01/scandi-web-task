import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../store/actions";
import {
  getPriceInCurrencySelected,
  setAttributesDefault,
} from "../../../utils";
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
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart() {
    const productToAdd = {
      ...this.props.product,
      selectedOptions: setAttributesDefault(this.props.product),
    };
    this.props.addToCart(productToAdd);
  }

  handleProductDetails(e) {
    if (e.target.alt === "cart-icon") return null;
    var { id } = this.props.product;

    console.log(id);
    var { history } = this.props;
    history.push(`/product/${id}`);
    console.log(history);
  }

  render() {
    const selectedCurrency = this.props.currency;
    const product = this.props.product;
    const imgDisplay = product.gallery[0];
    const price = getPriceInCurrencySelected(product.prices, selectedCurrency);

    return (
      <Wrapper
        outOfStock={!product.inStock}
        onClick={(e) => this.handleProductDetails(e)}
      >
        <ImgWrapper outOfStock={!product.inStock}>
          <CartIcon
            src="/assets/vectors/green-cart.svg"
            alt="cart-icon"
            onClick={this.addItemToCart}
          />
          {product.gallery.length && (
            <Image src={imgDisplay} alt="product-image" />
          )}
        </ImgWrapper>
        <PrdDesc>
          <Title>{product.name}</Title>
          <Price>{`${price.currency.label} ${price.amount}`}</Price>
        </PrdDesc>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
