import React, { createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currencyData } from "../../../data/currencyData";
import { categories } from "../../../data/nav-options";
import { changeCurrency } from "../../../store/actions";
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
  FilterOptions,
  Option,
} from "./NavbarStyle";
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilterOption: false,
    };
    this.currencyBox = createRef();
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.currencyClickAway = this.currencyClickAway.bind(this);
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.currencyClickAway);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.currencyClickAway);
  }

  handleCurrencyChange(currency) {
    this.props.changeCurrency(currency);
    this.toggleFilter();
  }

  toggleFilter() {
    this.setState((currentState) => ({
      showFilterOption: !currentState.showFilterOption,
    }));
  }

  currencyClickAway(event) {
    if (event.target.dataset.name === "currency-box") return null;
    if (!this.state.showFilterOption) return null;
    if (
      this.currencyBox.current &&
      !this.currencyBox.current.contains(event.target)
    )
      this.setState({ showFilterOption: false });
  }

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
            <CurrencyWrapper
              data-name="currency-box"
              onClick={() => this.toggleFilter()}
            >
              <CurrencyDisplay data-name="currency-box">
                {this.props.currency}
              </CurrencyDisplay>
              <CaretWrapper data-name="currency-box">
                <ImgWrapper
                  data-name="currency-box"
                  alt="caret-arrow"
                  src="/assets/vectors/caret-arrow.svg"
                  rotate={this.state.showFilterOption === true ? "true" : ""}
                />
              </CaretWrapper>
            </CurrencyWrapper>
            <Cart>
              {showBadges && <Badges>{categories.length}</Badges>}
              <ImgWrapper alt="cart-icon" src="/assets/vectors/cart-icon.svg" />
            </Cart>
          </SideAction>
          {this.state.showFilterOption && (
            <FilterOptions ref={this.currencyBox}>
              {currencyData.map((option, index) => (
                <Option
                  key={`currency-data-index${index}`}
                  onClick={() => this.handleCurrencyChange(option.charAt(0))}
                >
                  {option}
                </Option>
              ))}
            </FilterOptions>
          )}
        </SideActionWrapper>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
});
const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
