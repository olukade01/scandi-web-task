import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../data/nav-options";
import {
  Wrapper,
  Tab,
  NavTabs,
  ImgWrapper,
  SideActionWrapper,
  SideAction,
  CurrencyWrapper,
  Cart,
  CurrencyDisplay,
  Badges,
  CaretWrapper,
} from "./NavbarStyle";
class index extends React.Component {
  render() {
    const showBadges = categories.length > 0;
    return (
      <Wrapper>
        <NavTabs>
          {categories.map((category, tabIndex) => (
            <Tab key={`categoriesIndex_${tabIndex}`}>{category.name}</Tab>
          ))}
        </NavTabs>
        <Link to="/">
          <ImgWrapper src="/assets/vectors/brand-icon.svg" alt="brand-logo" />
        </Link>
        <SideActionWrapper>
          <SideAction>
            <CurrencyWrapper>
              <CurrencyDisplay>$</CurrencyDisplay>
              <CaretWrapper>
                <ImgWrapper
                  alt="caret-arrow"
                  src="/assets/vectors/caret-arrow.svg"
                />
              </CaretWrapper>
            </CurrencyWrapper>
            <Cart>
              {showBadges && <Badges>{categories.length}</Badges>}
              <ImgWrapper alt="cart-icon" src="/assets/vectors/cart-icon.svg" />
            </Cart>
          </SideAction>
        </SideActionWrapper>
      </Wrapper>
    );
  }
}

export default index;
