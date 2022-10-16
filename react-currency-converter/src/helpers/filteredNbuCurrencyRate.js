export const filterCurrency = (data) => {
  return data.filter((element) => element.cc === "USD" || element.cc === "EUR");
};
