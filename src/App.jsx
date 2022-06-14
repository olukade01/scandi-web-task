import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import Layout from "./components/organisms/layout/Layout";
import AppRoutes from "./AppRoutes";

const Wrapper = styled.div``;
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Wrapper>
          <Layout>
            <AppRoutes />
          </Layout>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
