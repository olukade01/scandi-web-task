import {
  CARTMINI,
  CURRENCY,
  CATEGORY,
  ALLCURRENCY,
  ALLCATEGORY,
  CLOSECARTMINI,
} from "./types";

export const defaultState = {
  isCartOpen: false,
  currencies: ["$ USD", "$ EUR", "$ JPY"],
  categories: [
    {
      name: "WOMEN",
    },
    {
      name: "MEN",
    },
    {
      name: "KIDS",
    },
  ],
  selectedCurrency: "$",
  selectedCategory: "WOMEN",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CARTMINI:
      return { ...state, isCartOpen: !state.isCartOpen };

    case CLOSECARTMINI:
      return { ...state, isCartOpen: false };

    case CURRENCY:
      return { ...state, selectedCurrency: action.payload.currency };

    case CATEGORY:
      return { ...state, selectedCategory: action.payload.tab };

    case ALLCURRENCY:
      return { ...state, currencies: action.payload.currencies };

    case ALLCATEGORY:
      return { ...state, categories: action.payload.categories };

    default:
      return state;
  }
};

export default reducer;
