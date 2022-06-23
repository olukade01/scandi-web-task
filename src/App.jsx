import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles";
import Layout from "./components/organisms/layout/Layout";
// import AppRoutes from "./AppRoutes";
import { Switch, Route } from "react-router-dom";
import Cart from "./screens/cart";
import Home from "./screens/home";
import PDP from "./screens/PDP";

const Wrapper = styled.div``;
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Wrapper>
          <Layout>
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/product/:id" component={PDP} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
