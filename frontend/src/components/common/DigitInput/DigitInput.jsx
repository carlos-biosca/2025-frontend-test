import "./DigitInput.css";

const DigitInput = ({ ref, handleDigitChange }) => {
  return (
    <input
      type="text"
      className="digitinput"
      inputMode="numeric"
      maxLength={1}
      pattern="[0-9]"
      ref={ref}
      onChange={handleDigitChange}
    />
  );
};

export default DigitInput;
