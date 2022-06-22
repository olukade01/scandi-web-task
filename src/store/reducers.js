import {
  CARTMINI,
  CURRENCY,
  CATEGORY,
  ALLCURRENCY,
  ALLCATEGORY,
  ADDTOCART,
  DELETEITEMINCART,
  MUTATEQUANTITY,
} from "./types";

export const defaultState = {
  isCartOpen: false,
  currencies: ["$ USD", "$ EUR", "$ JPY"],
  categories: [
    {
      name: "All",
    },
    {
      name: "MEN",
    },
    {
      name: "KIDS",
    },
  ],
  selectedCurrency: "$",
  selectedCategory: "All",
  cart: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CARTMINI:
      return { ...state, isCartOpen: !state.isCartOpen };

    case CURRENCY:
      return { ...state, selectedCurrency: action.payload.currency };

    case CATEGORY:
      return { ...state, selectedCategory: action.payload.tab };

    case ALLCURRENCY:
      return { ...state, currencies: action.payload.currencies };

    case ALLCATEGORY:
      return { ...state, categories: action.payload.categories };

    case ADDTOCART:
      const isProductInCart = state.cart.find(
        (item) => item.id === action.payload.product.id
      );
      if (isProductInCart) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === isProductInCart.id) {
            return;
          }
        });
        return;
      }
      return;

    default:
      return state;
  }
};

export default reducer;
