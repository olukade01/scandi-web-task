import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  font-weight: 300;
  max-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ${(props) =>
    props.large &&
    css`
      font-size: 1.875rem;
    `}
`;
export const ItemName = styled.span`
  ${(props) =>
    props.large &&
    css`
      font-weight: 600;
    `}
`;
export const ItemDesc = styled.span`
  margin: 0.3rem 0;
`;
export const ItemPrice = styled.span`
  font-weight: 500;
  margin-top: 0.75rem;

  ${(props) =>
    props.large &&
    css`
      font-weight: 700;
      font-size: 1.5rem;
    `}
`;
export const Sizes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.687rem;
  column-gap: 0.5rem;

  ${(props) =>
    props.large &&
    css`
      margin-top: 1.2rem;
    `}
`;
export const Size = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid #1d1f22;
  user-select: none;
  text-align: center;
  font-weight: 400;
  font-size: 0.875rem;

  ${({ large }) =>
    large &&
    css`
      height: 2.81rem;
      width: 3.93rem;
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: #1d1f22;
      color: #fff;
    `} /* ${({ swatchActive }) =>
    swatchActive &&
    css`
      border: 3px solid #5ece7b; ;
    `} */
`;
export const Color = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.background};
  ${({ large }) =>
    large &&
    css`
      height: 32px;
      width: 32px;
    `}

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #5ece7b;
    `}
`;
