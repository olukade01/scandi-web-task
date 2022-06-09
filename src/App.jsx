import React from 'react'
import {styled} from 'styled-components'
import GlobalStyles from './globalStyles'
import Layout from './components/organisms/layout/Layout'
import AppRoutes from './AppRoutes'

const Container = styled.div``
const Wrapper = styled.div``
class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyles/>
        <Wrapper>
          <Layout>
            <AppRoutes/>
          </Layout>
        </Wrapper>
      </Container>
    )
  }
}

export default App