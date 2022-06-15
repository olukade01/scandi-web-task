import React, { Component } from "react";
import styled, { css } from "styled-components";

const ButtonWrapper = styled.div`
  font-weight: 500;
  /* flex-grow: 1; */
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  padding: 0.81rem 0;
  border: ${({ border }) => border || "1px solid #5ece7b"};
  color: ${({ color }) => color || "#fff"};
  background: ${({ background }) => background || "#5ece7b"};
  text-align: center;

  ${(props) =>
    props.pdp &&
    css`
      padding: 1.1rem 0;
      font-size: 1rem;
    `}
`;

export default class Button extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }
  render() {
    return (
      <ButtonWrapper
        color={this.props.color}
        border={this.props.border}
        background={this.props.background}
        pdp={this.props.pdp}
      >
        {this.props.title}
      </ButtonWrapper>
    );
  }
}
