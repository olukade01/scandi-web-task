export const getPriceInCurrencySelected = (prices, selectedCurrency) => {
  console.log(selectedCurrency);
  const price = prices.find(
    (price) => price.currency.label === selectedCurrency
  );
  if (!price) {
    const defaultPrice = { currency: "", amount: "" };
    return defaultPrice;
  }
  return price;
};

export const setAttributesDefault = (product) => {
  const selectedOptions = {};
  const { attributes } = product;

  attributes.forEach((attribute) => {
    selectedOptions[attribute.name] =
      attribute.items.length > 0 ? attribute.items[0] : null;
  });
  return selectedOptions;
};

export const totalCartAmount = (cartItems, selectedCurrency) => {
  return Number(
    cartItems.reduce((acc, item) => {
      const price = item.prices.find(
        (price) => price.currency.label === selectedCurrency
      ).amount;
      const itemAmount = item.quantity * price;
      return acc + itemAmount;
    }, 0)
  ).toLocaleString();
};
