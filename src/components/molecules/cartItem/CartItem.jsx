import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCartItem, mutateProductQuantity } from "../../../store/actions";
import { getPriceInCurrencySelected } from "../../../utils";
import CartItemDetails from "../cartItemDetails/CartItemDetails";
import {
  AddButton,
  ArrowLeft,
  ArrowRight,
  ItemDisplayWrapper,
  ItemImage,
  ItemImgWrapper,
  ItemQuantity,
  ItemQuantityWrapper,
  MinusButton,
  Wrapper,
} from "./CartItemStyle";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOption: 0,
      setImage: { img: "", active: 0 },
      selectedOptions: {},
      item: {},
    };

    this.handleOptionSet = this.handleOptionSet.bind(this);
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  componentDidMount() {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);
    const activeOption = item.selectedOptions.length - 1;

    const selectedOptions = item.selectedOptions[activeOption];

    this.setState({
      setImage: { img: item.gallery[0], active: 0 },
      selectedOptions,
      item,
      activeOption,
    });
  }

  componentDidUpdate(prevProps) {
    const item = this.props.cart.find((i) => i.id === this.props.cartItemId);

    if (this.state.activeOption !== item.selectedOptions.length - 1) {
      const activeOption = item.selectedOptions.length - 1;

      const selectedOptions = item.selectedOptions[activeOption];

      this.setState({
        selectedOptions,
        activeOption,
      });
    }
    if (prevProps.cart.length !== this.props.cart.length) {
      const activeOption = item.selectedOptions.length - 1;

      const selectedOptions = item.selectedOptions[activeOption];

      this.setState({
        setImage: { active: 0, img: item.gallery[0] },
        selectedOptions,
        item,
        activeOption,
      });
    }
  }

  handleOptionSet(name, item) {
    this.setState((currentState) => ({
      selectedOptions: {
        ...currentState.selectedOptions,
        [name]: item,
      },
    }));
  }

  handleQuantityChange(mutationType, item) {
    const { id, quantity, name } = item;
    if (mutationType === "remove" && quantity === 1) {
      this.handleCartItemDelete(id, name);
      return null;
    }
    const addItem = mutationType === "add" ? this.state.selectedOptions : {};
    this.props.mutateQuantity(mutationType, id, addItem);
  }

  handleImageChange(gallery, type) {
    const active = this.state.setImage.active;
    if (type === "next" && active !== gallery.length - 1) {
      this.setState({
        setImage: { img: gallery[active + 1], active: active + 1 },
      });
      return null;
    }
    if (type === "previous" && active !== 0) {
      this.setState({
        setImage: { img: gallery[active - 1], active: active - 1 },
      });
      return null;
    }
  }

  handleCartItemDelete(productId, productName) {
    if (
      window.confirm(
        `Are you sure you want to remove item '${productName}' from cart?`
      )
    )
      this.props.deleteCartItem(productId);
  }

  render() {
    const item = this.state.item;
    const selectedOptionToShow = this.state.selectedOptions;
    const showItems = Object.keys(item).length !== 0;
    // const showAttributes = Object.keys(selectedOptionToShow).length !== 0;
    const price = showItems
      ? getPriceInCurrencySelected(item.prices, this.props.currency)
      : {};

    return (
      <>
        {showItems ? (
          <Wrapper large={this.props.large}>
            <CartItemDetails
              item={item}
              price={price}
              handleOption={this.handleOptionSet}
              selectedOptionToShow={selectedOptionToShow}
              large={this.props.large}
            />
            <ItemImgWrapper>
              <ItemQuantityWrapper large={this.props.large}>
                <AddButton
                  onClick={() => this.handleQuantityChange("add", item)}
                  large={this.props.large}
                >
                  +
                </AddButton>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <MinusButton
                  onClick={() => this.handleQuantityChange("remove", item)}
                  large={this.props.large}
                >
                  -
                </MinusButton>
              </ItemQuantityWrapper>
              <ItemDisplayWrapper large={this.props.large}>
                {this.props.large && (
                  <>
                    <ArrowLeft
                      onClick={() =>
                        this.handleImageChange(item.gallery, "previous")
                      }
                      src="/assets/vectors/arrow-right.svg"
                      alt="arrow"
                    />
                    <ArrowRight
                      onClick={() =>
                        this.handleImageChange(item.gallery, "next")
                      }
                      src="/assets/vectors/arrow-right.svg"
                      alt="arrow"
                    />
                  </>
                )}
                <ItemImage src={this.state.setImage.img} alt="cart-item-img" />
              </ItemDisplayWrapper>
            </ItemImgWrapper>
          </Wrapper>
        ) : (
          []
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.selectedCurrency,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  mutateQuantity: (mutationType, productId, newSelectedOption) =>
    dispatch(mutateProductQuantity(mutationType, productId, newSelectedOption)),
  deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
