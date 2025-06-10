import check from "@assets/check.svg";
import "./Benefits.css";

const Benefits = () => {
  return (
    <ul className="benefits">
      <li className="benefits__item benefits__item--gradient">
        <div className="benefits__circle">
          <img src={check} alt="check" className="benefits__icon" />
        </div>
        Access to 100+ GAMES fro FREE thanks to ads
      </li>
      <li className="benefits__item">
        <span className="benefits__circle">
          <img src={check} alt="check" className="benefits__icon" />
        </span>
        Log In Across All Your Devices
      </li>
      <li className="benefits__item benefits__item--gradient">
        <span className="benefits__circle">
          <img src={check} alt="check" className="benefits__icon" />
        </span>
        Skip the Line with Customer Support
      </li>
    </ul>
  );
};

export default Benefits;
