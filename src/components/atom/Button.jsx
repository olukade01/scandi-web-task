import React, { Component } from "react";
import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  font-weight: 500;
  width: 100%;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  padding: 0.81rem 0;
  border: ${({ border }) => border || "1px solid #5ece7b"};
  color: ${({ color }) => color || "#fff"};
  background: ${({ background }) => background || "#5ece7b"};
  text-align: center;

  ${(props) =>
    props.outOfStock &&
    css`
      background-color: rgba(128, 128, 128, 0.4);
      border: none;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.pdp &&
    css`
      padding: 1.1rem 0;
      font-size: 1rem;
    `}
`;

export default class Button extends Component {
  render() {
    return (
      <ButtonWrapper
        color={this.props.color}
        border={this.props.border}
        background={this.props.background}
        pdp={this.props.pdp}
        onClick={this.props.onClick}
        outOfStock={this.props.outOfStock}
        disabled={this.props.disabled}
      >
        {this.props.title}
      </ButtonWrapper>
    );
  }
}
