import "./SubmitButton.css";

const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className="submitbutton">
      {text}
    </button>
  );
};

export default SubmitButton;
