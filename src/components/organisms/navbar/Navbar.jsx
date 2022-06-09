import React from 'react'
import { Wrapper, Tab, NavTabs } from './NavbarStyle'

class index extends React.Component {
  render() {
    const navTabs = this.props.tabs
    return (
      <Wrapper>
        <NavTabs>
        {navTabs.map((tab, tabIndex) =>
          <Tab key={`navtabIndex${tabIndex}`}>
            {tab.name}
          </Tab>
         )}
        </NavTabs>
      </Wrapper>
    )
  }
}

export default index