import {
  // CARTMINI,
  CURRENCY,
  // CATEGORY,
  // ALLCURRENCY,
  // ALLCATEGORY,
} from "./types";

export const changeCurrency = (currency) => ({
  type: CURRENCY,
  payload: { currency },
});
