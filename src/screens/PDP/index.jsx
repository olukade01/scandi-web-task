import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/atom/Button";
import CartItemDetails from "../../components/molecules/cartItemDetails/CartItemDetails";
import opusClient from "../../server";
import { PRODUCT_QUERY } from "../../server/queries";
import { addToCart } from "../../store/actions";
import { getPriceInCurrencySelected, setAttributesDefault } from "../../utils";
import {
  ButtonWrapper,
  Info,
  MainContainer,
  PDBigImage,
  PDBigImageWrapper,
  PDDetails,
  PDSmallContainer,
  PDSmallImage,
  Price,
  PriceLabel,
  PriceValue,
  SmallSizes,
  Wrapper,
} from "./PDPStyle";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      selectedOptions: {},
      selectedSmallImage: 0,
    };

    this.handleOptionSet = this.handleOptionSet.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  handleOptionSet(name, item) {
    this.setState((currentState) => ({
      selectedOptions: {
        ...currentState.selectedOptions,
        [name]: item,
      },
    }));
  }

  addItemToCart() {
    const productToAdd = {
      ...this.state.product,
      selectedOptions: this.state.selectedOptions,
    };
    this.props.addToCart(productToAdd);
  }

  async componentDidMount() {
    try {
      const productId = this.props.match.params.id;
      // console.log(this.props.match.params);
      var { product } = await opusClient.post(PRODUCT_QUERY(productId));
      this.setState({
        product,
        selectedOptions: setAttributesDefault(product),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const productData = this.state.product;
    console.log({ productData });
    const isDataFetched = Object.keys(productData).length;
    const selectedOptionToShow = this.state.selectedOptions;
    const price = productData.prices
      ? getPriceInCurrencySelected(productData.prices, this.props.currency)
      : {};
    const smallImages = productData.gallery
      ? productData.gallery.length > 3
        ? productData.gallery.slice(0, 3)
        : productData.gallery
      : [];
    const largeImage = productData.gallery
      ? productData.gallery[this.state.selectedSmallImage]
      : "";

    return (
      <>
        {isDataFetched !== 0 && (
          <Wrapper>
            <SmallSizes>
              {smallImages.map((img, index) => (
                <PDSmallContainer
                  onClick={() => this.setState({ selectedSmallImage: index })}
                  selected={index === this.state.selectedSmallImage}
                  key={`small-images-index${index}`}
                >
                  <PDSmallImage src={img} alt="small-images" />
                </PDSmallContainer>
              ))}
            </SmallSizes>
            <MainContainer>
              <PDBigImageWrapper outOfStock={!productData.inStock}>
                <PDBigImage src={largeImage} alt="big-image" />
              </PDBigImageWrapper>
              <PDDetails>
                <CartItemDetails
                  key={`cart-item-index${index}`}
                  item={productData}
                  handleOption={this.handleOptionSet}
                  selectedOptionToShow={selectedOptionToShow}
                  disabled
                  large
                  pdp
                />
                <Price>
                  <PriceLabel>PRICE:</PriceLabel>
                  <PriceValue>{`${price.currency.label} ${price.amount}`}</PriceValue>
                </Price>
                <ButtonWrapper outOfStock={productData.inStock}>
                  <Button
                    disabled={!productData.inStock}
                    onClick={this.addItemToCart}
                    pdp
                    title="ADD TO CART"
                  />
                </ButtonWrapper>
                <Info>{productData.description}</Info>
              </PDDetails>
            </MainContainer>
          </Wrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
