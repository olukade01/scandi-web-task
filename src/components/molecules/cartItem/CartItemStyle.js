import styled, { css } from "styled-components";
import { Size } from "../cartItemDetails/CartDetailsStyle";

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 2.5rem;
  max-height: 13rem;
  height: 13rem;
`;
export const ItemImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const ItemQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  margin-right: 0.6rem;
`;
export const ItemQuantity = styled.span`
  text-align: center;
  font-weight: 500;
`;
export const AddButton = styled(Size)`
  font-size: 1.5rem;
  user-select: none;

  ${({ large }) =>
    large &&
    css`
      width: 2.81rem;
      height: 2.81rem;
    `}
`;
export const ItemDisplayWrapper = styled.div`
  position: relative;
  width: 8.81rem;
  height: 15rem;

  &:hover {
    img[alt="arrow"] {
      display: inline;
    }
  }
`;
export const ItemImage = styled.img`
  /* -o-object-fit: contain; */
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
export const ArrowRight = styled.img`
  position: absolute;
  display: none;
  cursor: pointer;
  z-index: 800;
  right: 0;
  top: calc(50%-0.75rem);
`;
export const ArrowLeft = styled(ArrowRight)`
  left: 0;
  transform: rotate(180deg);
  transition: 0.2s all ease-in-out;
`;
