import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  height: 80px;
  color: #1d1f22;
  padding: 0 6.31rem 0 7.31rem;
`;
export const NavTabs = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const Tab = styled.span`
  cursor: pointer;
  height: 100%;
  display: flex;
  padding: 0 1.3rem;
  align-items: center;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: #5ece7b;
    color: #5ece7b;
    font-weight: 500;
  }
`;
export const ImgWrapper = styled.img`
  display: flex;
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
  cursor: pointer;
  align-items: center;
  user-select: none;
`;
export const Cart = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  user-select: none;
`;
export const CurrencyDisplay = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.81rem;
  margin-right: 0.5rem;
`;
export const Badges = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #1d1f22;
  color: #fff;
  font-weight: 700;
  font-size: 0.87rem;
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
`;
export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 400;
  bottom: -900%;
  left: -10%;
  width: 140%;
  background-color: #fff;
  padding: 0.7rem 0;
  font-size: 18px;
  font-weight: 400;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;
export const Option = styled.span`
  padding: 0.8rem 0.5rem 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
