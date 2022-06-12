import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${({ outOfStock }) =>
      !outOfStock &&
      css`
        img[alt="cart-icon"] {
          display: inline-flex;
        }
      `}
  }

  ${({ outOfStock }) =>
    outOfStock &&
    css`
      opacity: 0.5;
    `}
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20.62rem;

  ${({ outOfStock }) =>
    outOfStock &&
    css`
      &::after {
        content: "OUT OF STOCK";
        top: 0;
        color: #8d8f9a;
        font-size: 1.5rem;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 200;
      }
    `}
`;
export const CartIcon = styled.img`
  display: none;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  bottom: -1.62rem;
  right: 1.625rem;
`;
export const Image = styled.img`
  -o-object-fit: contain;
  object-fit: contain;
  object-position: top;
  width: 100%;
  height: 100%;
`;
export const PrdDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
export const Title = styled.span`
  font-weight: 300;
  font-size: 1.12rem;
`;
export const Price = styled(Title)`
  font-weight: 500;
  margin-top: 0.5rem;
`;
