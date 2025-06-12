import plancheck from "@assets/plan-check.svg";

import "./PlanOptions.css";

const PlanOptions = ({ plan, handlePlanChange }) => {
  return (
    <div className="plan__container">
      <div className="plan__yearly">
        <div className="plan__discount">Save 20%</div>
        <label htmlFor="yearly" className="plan">
          <input
            type="radio"
            name="plan"
            id="yearly"
            value="yearly"
            onChange={handlePlanChange}
            className="plan__input"
          />

          <div className="plan__time">
            <div
              className={`plan__circle ${
                plan === "yearly"
                  ? "plan__circle--active"
                  : "plan__circle--empty"
              }`}
            >
              <img src={plancheck} alt="check" className="plan__icon" />
            </div>
            <div className="plan__info">
              <p className="plan__best only-mobile">BEST VALUE</p>
              <h2 className="plan__title">Annual</h2>
            </div>
          </div>
          <div className="plan__price">
            <div className="plan__value">
              <p className="plan__money">
                <span>$ 89.99</span> /year
              </p>
              <p className="plan__annually">Billed annually</p>
            </div>
            <p className="plan__trial">7-day free trial</p>
          </div>
        </label>
      </div>

      <label htmlFor="monthly" className="plan">
        <input
          type="radio"
          name="plan"
          id="monthly"
          value="monthly"
          onChange={handlePlanChange}
          className="plan__input"
        />
        <div className="plan__time">
          <div
            className={`plan__circle ${
              plan === "monthly"
                ? "plan__circle--active"
                : "plan__circle--empty"
            }`}
          >
            <img src={plancheck} alt="check" className="plan__icon" />
          </div>
          <div className="plan__info">
            <h2 className="plan__title">Monthly</h2>
          </div>
        </div>
        <div className="plan__price">
          <div className="plan__value">
            <p className="plan__money">
              <span>$ 9.99</span> /year
            </p>
            <p className="plan__annually">Billed monthly</p>
          </div>
          <p className="plan__trial">3-day free trial</p>
        </div>
      </label>
    </div>
  );
};

export default PlanOptions;
