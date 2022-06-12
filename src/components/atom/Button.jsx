import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
font-weight: 600;
flex-grow: 1;
font-size: 0.875rem;
outline: none;
padding: 0.81rem 0;
border: ${({border}) => border || 'none'};
color: ${({color}) => color || '#fff'};
background: ${({background}) => background || '#5ece7b'};
`

export default class Button extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }
  render() {
    return (
      <ButtonWrapper color border background>{this.props.title}</ButtonWrapper>
    )
  }
}
