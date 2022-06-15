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
  /* background-color: rgba(57, 55, 72, 0.1); */
  background: #fff;
  /* color: #fff; */
  padding: 2rem 1rem 1.25rem 1rem;
`;
export const Title = styled.span`
  font-weight: 600;
`;
export const LightText = styled(Title)`
  font-weight: 300;
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
  justify-content: space-between;
  column-gap: 0.75rem;
`;
export const ButtonWrapper = styled.div`
  width: 9.7rem;
`;
// export const Buttons = styled.div``;
// export const Buttons = styled.div``;
