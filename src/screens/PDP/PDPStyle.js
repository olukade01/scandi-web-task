import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;
export const SmallSizes = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
`;
export const PDSmallContainer = styled.span`
  width: 4.937rem;
  height: 5rem;
  margin-bottom: 2.5rem;
  /* 
    ${(props) =>
    props.selected &&
    css`
      border: 0.05px solid #5ece7b;
      border-radius: 1rem;
    `} */
`;
export const PDSmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const MainContainer = styled.div`
  display: flex;
  column-gap: 6.25rem;
`;
export const PDBigImageWrapper = styled.div`
  width: 38.12rem;
  height: 28.93rem;
  transition: 0.2s all ease-in-out;

  ${(props) =>
    props.outOfStock &&
    css`
      opacity: 0.5;
      &::after {
        content: "OUT OF STOCK";
        top: 0;
        color: #8d8f9a;
        font-size: 1.5rem;
        position: absolute;
        z-index: 200;
        width: 38.12rem;
        height: 28.93rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

export const PDBigImage = styled.img`
  width: 38.12rem;
  height: 28.93rem;
  object-fit: contain;
  object-position: center;
`;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
// export const Wrapper = styled.div`
//   display: flex;
// `;
