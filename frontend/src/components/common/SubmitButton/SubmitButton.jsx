import createRippleEffect from "@logic/ripple";
import Spinner from "@components/common/Spinner";

import "./SubmitButton.css";

const SubmitButton = ({ text, trial, isLoading }) => {
  return (
    <button
      type="submit"
      className={`submitbutton ripple ${trial ? "submitbutton--yellow" : ""}`}
      onClick={createRippleEffect}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

export default SubmitButton;
