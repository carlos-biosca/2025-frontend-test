import createRippleEffect from "@logic/ripple";

import "./SubmitButton.css";

const SubmitButton = ({ text, trial }) => {
  return (
    <button
      type="submit"
      className={`submitbutton ripple ${trial ? "submitbutton--yellow" : ""}`}
      onClick={createRippleEffect}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
