import "./SubmitButton.css";

const SubmitButton = ({ text, trial }) => {
  return (
    <button
      type="submit"
      className={`submitbutton ${trial && "submitbutton--yellow"}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
