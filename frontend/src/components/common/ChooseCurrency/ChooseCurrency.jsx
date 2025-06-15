import "./ChooseCurrency.css";

const ChooseCurrency = ({ currency, handleCurrencyChange }) => {
  return (
    <div className="choose__switch">
      <label
        className={`choose__currency ${
          currency === "USD" && "choose__currency--selected"
        }`}
      >
        <input
          type="radio"
          name="region"
          value="USD"
          onChange={handleCurrencyChange}
        />
        US
      </label>
      <label
        className={`choose__currency ${
          currency === "EUR" && "choose__currency--selected"
        }`}
      >
        <input
          type="radio"
          name="region"
          value="EUR"
          onChange={handleCurrencyChange}
        />
        EU
      </label>
    </div>
  );
};

export default ChooseCurrency;
