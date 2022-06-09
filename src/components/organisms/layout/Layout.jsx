import React, { Component } from 'react'
import { Main, Wrapper } from './LayoutStyle'
import Navbar from '../navbar/Navbar'

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Main></Main>
      </Wrapper>
    )
  }
}
