import { useState } from "react";
import { useFormContext } from "@context/useFormContext";

import Title from "@components/common/Title";
import SubmitButton from "@components/common/SubmitButton";
import PlanOptions from "@components/common/PlanOptions";
import ChooseCurrency from "@components/common/ChooseCurrency";

import "./ChoosePlan.css";

const ChoosePlan = () => {
  const { userId, prevStep, nextStep } = useFormContext();
  const [plan, setPlan] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handlePlanChange = e => {
    setPlan(e.target.value);
  };

  const handleCurrencyChange = e => {
    setCurrency(e.target.value);
  };

  return (
    <main className="choose">
      <button type="button" onClick={prevStep} className="choose__back">
        &#x2039;
      </button>
      <ChooseCurrency
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
      <Title title="Choose Your Plan" />
      <form action="" className="choose__options">
        <PlanOptions
          plan={plan}
          handlePlanChange={handlePlanChange}
          currency={currency}
        />
        <p className="choose__cancel">Cancel anytime.</p>
        <SubmitButton text="Start my free trial!" trial />
        <div className="choose__links">
          <span>Privacy Policy</span> | <span>Terms of Service</span> |{" "}
          <span>Restore</span>
        </div>
      </form>
    </main>
  );
};

export default ChoosePlan;
