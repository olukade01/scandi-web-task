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
  ${(props) =>
    props.pdp &&
    css`
      overflow-y: unset;
      flex-grow: 0;
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
  margin-top: 0.4rem;

  ${(props) =>
    props.pdp &&
    css`
      margin-bottom: 1.18rem;
    `}
`;
export const Label = styled.span`
  font-size: 14px;
  ${(props) =>
    props.large &&
    css`
      margin-top: 1rem;
      font-weight: 700;
      font-size: 18px;
      text-transform: uppercase;
    `}
  ${(props) =>
    props.pdp &&
    css`
      margin-top: 1.5rem;
    `};
`;
export const ItemPrice = styled.span`
  font-weight: 500;
  margin-top: 0.8rem;

  ${(props) =>
    props.pdp &&
    css`
      display: none;
    `}

  ${(props) =>
    props.large &&
    css`
      font-weight: 700;
      font-size: 1.5rem;
    `}
`;
export const SizesWrapper = styled.div`
  margin-top: 0.7rem;
`;
export const Sizes = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  column-gap: 0.5rem;

  ${(props) =>
    props.large &&
    css`
      margin-top: 0.5rem;
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
  font-weight: 400;
  font-size: 0.875rem;

  ${({ large }) =>
    large &&
    css`
      height: 2.81rem;
      width: 3.93rem;
      font-size: 1rem;
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: #1d1f22;
      color: #fff;
    `}
     ${({ swatchActive }) =>
    swatchActive &&
    css`
      border: 3px solid #5ece7b; ;
    `}
    ${(props) =>
    props.disabled &&
    css`
      color: #a6a6a6;
      border: 1px solid #a6a6a6;
    `}
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
