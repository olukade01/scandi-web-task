import React, { Component } from "react";
import { images } from "../../data/pdp";
import {
  MainContainer,
  PDBigImage,
  PDBigImageWrapper,
  PDSmallContainer,
  PDSmallImage,
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
            <PDBigImage />
          </PDBigImageWrapper>
        </MainContainer>
      </Wrapper>
    );
  }
}

export default index;
