import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;
export const SmallSizes = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
`;
export const PDSmallContainer = styled.span`
  width: 4.937rem;
  height: 5rem;
  margin-bottom: 2.5rem;
  /* 
    ${(props) =>
    props.selected &&
    css`
      border: 0.05px solid #5ece7b;
      border-radius: 1rem;
    `} */
`;
export const PDSmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const MainContainer = styled.div`
  display: flex;
  column-gap: 6.25rem;
`;
export const PDBigImageWrapper = styled.div`
  width: 38.12rem;
  height: 31.93rem;
  background-color: red;
  transition: 0.2s all ease-in-out;

  ${(props) =>
    props.outOfStock &&
    css`
      opacity: 0.5;
      &::after {
        content: "OUT OF STOCK";
        top: 0;
        color: #8d8f9a;
        font-size: 1.5rem;
        position: absolute;
        z-index: 200;
        width: 38.12rem;
        height: 28.93rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

export const PDBigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const PDDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 28.93rem; */
  /* overflow: auto; */
  padding-right: 1rem;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.25rem 0 1.56rem;
`;
export const PriceLabel = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
`;
export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 0.825rem;
`;
export const Info = styled.span`
  max-width: 18.3rem;
  line-height: 25.6px;
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 2.5rem;
  width: 18rem;
`;
