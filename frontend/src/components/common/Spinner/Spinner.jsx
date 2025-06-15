import spinner from "@assets/spinner-of-dots.png";
import "./Spinner.css";

const Spinner = () => {
  return <img src={spinner} alt="Loading..." className="spinner-icon" />;
};

export default Spinner;
