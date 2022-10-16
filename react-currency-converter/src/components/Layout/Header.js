import React from "react";
import useFetch from "../../hooks/useFetch";

import styles from "./Header.module.css";

import { NBU_URL } from "../../constants/urls";
import { filterCurrency } from "../../helpers/filteredNbuCurrencyRate";

const Header = () => {
  const { data: exchangeRate, isPending } = useFetch(NBU_URL);


  return (
    <header className={styles.header}>
      <h2>Currency Converter</h2>
      {isPending && <p>Loading...</p>}
      <div className={styles.currencyRate}>{currencyRate}</div>
    </header>
  );
};

export default Header;
