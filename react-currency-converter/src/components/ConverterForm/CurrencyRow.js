import React from "react";

import styles from "./CurrencyRow.module.css";

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <div>
      <input
        type="number"
        className={styles.input}
        value={amount}
        onChange={onChangeAmount}
        min="1"
      />
      <select
        className={styles.select}
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
