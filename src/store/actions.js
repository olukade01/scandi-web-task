import {
  CARTMINI,
  CURRENCY,
  CATEGORY,
  ALLCURRENCY,
  ALLCATEGORY,
  CLOSECARTMINI,
} from "./types";

export const closeCart = () => ({
  type: CLOSECARTMINI,
});
export const toggleCart = () => ({
  type: CARTMINI,
});
export const changeCurrency = (currency) => ({
  type: CURRENCY,
  payload: { currency },
});
export const setCategory = (tab) => ({
  type: CATEGORY,
  payload: { tab },
});
export const setAllCategory = (categories) => ({
  type: ALLCATEGORY,
  payload: { categories },
});
export const setCurrencies = (currencies) => ({
  type: ALLCURRENCY,
  payload: { currencies },
});
// export const changeCurrency = (currency) => ({
//   type: CURRENCY,
//   payload: { currency },
// });
