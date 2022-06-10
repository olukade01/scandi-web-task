import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../../data/nav-options'
import { Wrapper, Tab, NavTabs, ImgWrapper, SideActionWrapper, SideAction, CurrencyWrapper, Cart, CurrencyDisplay } from './NavbarStyle'

class index extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavTabs>
        {categories.map((category, tabIndex) =>
          <Tab key={`categoriesIndex_${tabIndex}`}>
            {category.name}
          </Tab>
         )}
        </NavTabs>
        <Link to="/">
          <ImgWrapper src="" alt='brand-logo' />
        </Link>
        <SideActionWrapper>
          <SideAction  >
            <CurrencyWrapper>
              <CurrencyDisplay/>
              <ImgWrapper alt='caret-arrow' src=''/>
            </CurrencyWrapper>
            <Cart>
              <ImgWrapper alt='cart-icon' src=''/>
            </Cart>
          </SideAction>
        </SideActionWrapper>
      </Wrapper>
    )
  }
}

export default index