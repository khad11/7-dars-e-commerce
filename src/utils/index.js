export const formatPrice = (price) => {
  const pricep = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
  return pricep;
};
