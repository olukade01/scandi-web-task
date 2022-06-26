import styled, { css } from "styled-components";
import { Size } from "../cartItemDetails/CartDetailsStyle";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  max-height: 12.3rem;
  height: 12.3rem;

  ${({ large }) =>
    large &&
    css`
      max-height: 18.3rem;
      height: 18.3rem;
      padding-bottom: 1.7rem;
      border-bottom: 1px solid #e5e5e5;
    `}
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
  ${({ large }) =>
    large &&
    css`
      margin-right: 1.5rem;
    `}
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
export const MinusButton = styled(AddButton)``;

export const ItemDisplayWrapper = styled.div`
  position: relative;
  width: 8.4rem;
  ${({ large }) =>
    large &&
    css`
      width: 11.5rem;
      height: 100%;
    `}
`;
export const ItemImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
export const ArrowRight = styled.img`
  position: absolute;
  background: rgba(0, 0, 0, 0.73);
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  right: 1rem;
  bottom: 1rem;
`;
export const ArrowLeft = styled(ArrowRight)`
  right: 3rem;
  transform: rotate(180deg);
`;
