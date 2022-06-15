import styled, { css } from "styled-components";

export const Title = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;
export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.43rem;
  padding-bottom: 12rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 1.5rem;
  /* width: 68.62rem; */
`;
export const EmptyCart = styled.span`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 1rem;
  font-weight: 300;
  opacity: 0.5;
`;
export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  margin-top: 0.5rem;
`;
export const OrderDetails = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ButtonWrapper = styled.div`
  max-width: 17.5rem;
  margin-top: 0.5rem;
`;
export const LightOrderDetails = styled(OrderDetails)`
  font-weight: 300;
  width: 6.2rem;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
`;
