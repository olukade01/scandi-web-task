import React, { Component } from "react";
import Button from "../../components/atom/Button";
import CartItemDetails from "../../components/molecules/cartItemDetails/CartItemDetails";
import { cartItemsData } from "../../data/cart-items";
import { images } from "../../data/pdp";
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
  render() {
    return (
      <Wrapper>
        <SmallSizes>
          {images.map((img, index) => (
            <PDSmallContainer key={`small-images-index${index}`}>
              <PDSmallImage src={img} alt="small-images" />
            </PDSmallContainer>
          ))}
        </SmallSizes>
        <MainContainer>
          <PDBigImageWrapper>
            <PDBigImage src="/assets/images/image.png" alt="big-image" />
          </PDBigImageWrapper>
          <PDDetails>
            <CartItemDetails
              key={`cart-item-index${index}`}
              items={cartItemsData[0]}
              large
              pdp
            />
            <Price>
              <PriceLabel>PRICE:</PriceLabel>
              <PriceValue>$50.00</PriceValue>
            </Price>
            <ButtonWrapper>
              <Button pdp title="ADD TO CART" />
            </ButtonWrapper>
            <Info>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </Info>
          </PDDetails>
        </MainContainer>
      </Wrapper>
    );
  }
}

export default index;
