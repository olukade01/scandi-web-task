import {
  // CARTMINI,
  CURRENCY,
  // CATEGORY,
  // ALLCURRENCY,
  // ALLCATEGORY,
} from "./types";

const defaultState = {
  isCartOpen: false,
  currencies: [],
  categories: [],
  selectedCurrency: "",
  selectedCategory: "women",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENCY:
      return { ...state, selectedCurrency: action.payload.currency };

    default:
      return state;
  }
};

export default reducer;
