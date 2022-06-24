import React, { createRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeCurrency,
  setAllCategory,
  setCategory,
  setCurrencies,
  toggleCart,
} from "../../../store/actions";
import opusClient from "../../../server";
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
import { ALL_CATEGORY, ALL_CURRENCY } from "../../../server/queries";
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

    try {
      const response = await Promise.allSettled([
        opusClient.post(ALL_CURRENCY),
        opusClient.post(ALL_CATEGORY),
      ]);
      console.log([response]);
      var [allCurrencyData, allCategoryData] = response;

      if (allCurrencyData.status === "fulfilled") {
        var { currencies } = allCurrencyData.value;
        var arrCurrencies = currencies.map((currency) => currency.label);
        this.props.setCurrencies(arrCurrencies);
        this.props.changeCurrency(arrCurrencies[0]);
      }
      if (allCategoryData.status === "fulfilled") {
        var { categories } = allCategoryData.value;
        const myCategories = categories;
        this.props.setAllCategory(myCategories);
      }
    } catch (error) {
      console.log(error);
    }
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
    const navTabs = this.props.tab;
    const showBadges = this.props.cart.length > 0;
    return (
      <Wrapper>
        <NavTabs>
          {navTabs.map((tab, tabIndex) => (
            <Tab
              key={`categoriesIndex_${tabIndex}`}
              className={
                this.props.selectedCategory === tab.name ? "active" : ""
              }
              onClick={() => {
                this.props.setCategory(tab.name);
                // this.props.history.push(`/${tab.name}`);
              }}
            >
              {tab.name}
            </Tab>
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
                {this.props.currency.label}
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
            <Cart onClick={() => this.props.toggleCart()}>
              {showBadges && <Badges>{this.props.cart.length}</Badges>}
              <ImgWrapper alt="cart-icon" src="/assets/vectors/cart-icon.svg" />
            </Cart>
          </SideAction>
          {this.state.showFilterOption && (
            <FilterOptions ref={this.currencyBox}>
              {this.props.currencies.map((option, index) => (
                <Option
                  key={`currency-data-index${index}`}
                  onClick={() => this.handleCurrencyChange(option)}
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
  tab: state.categories,
  selectedCategory: state.selectedCategory,
  currencies: state.currencies,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
  setCategory: (tab) => dispatch(setCategory(tab)),
  setCurrencies: (currencies) => dispatch(setCurrencies(currencies)),
  setAllCategory: (categories) => dispatch(setAllCategory(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
