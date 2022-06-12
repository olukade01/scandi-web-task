import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(57, 55, 72, 0.22);
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
`;
export const MiniCart = styled.div`
  width: 20.3rem;
  right: 5.4rem;
  position: absolute;
  color: #fff;
  padding: 0.5rem 1rem 1.25rem 1rem;
`;
export const Title = styled.span`
  font-weight: 700;
  /* font-size: 1.12rem; */
`;
export const LightText = styled(Title)`
  font-weight: 500;
`;
export const CartItemsWrapper = styled.div`
  margin-top: 1.56rem;
  display: flex;
  flex-direction: column;
`;
export const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.18rem;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;
// export const LinkToCart = styled.div``;
// export const Buttons = styled.div``;
// export const Buttons = styled.div``;
