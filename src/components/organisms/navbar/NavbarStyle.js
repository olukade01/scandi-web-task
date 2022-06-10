import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: #1d1f22;
  padding: 0 6.31rem 0 7.31rem;
`;
export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  /* height: 100%; */
  /* margin-bottom: 0.1rem; */
`;
export const Tab = styled.span`
  cursor: pointer;
  /* height: 100%; */
  /* display: flex; */
  /* align-items: center; */
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: #5ece7b;
    color: #5ece7b;
    font-weight: 600;
  }
`;
export const ImgWrapper = styled.img`
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `}
`;
export const SideActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SideAction = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
`;
export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  /* user-select: none; */
`;
export const Cart = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* position: relative; */
  /* user-select: none; */
`;
export const CurrencyDisplay = styled.span`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* width: 2rem; */
  /* height: 1.81rem; */
  /* margin-right: 0.5rem; */
`;
