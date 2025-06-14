import Title from "@components/common/Title/Title";
import Confetti from "react-confetti";

import "./Congrats.css";

import congrats from "@assets/congrats.png";

const colors = ["#f8cd6a", "#46bb46", "#5ca4d4", "#5a458e"];

const Congrats = () => {
  return (
    <main>
      <Title
        title="Congrats! You're now a"
        highlight="subscriber"
        subtitle="Explore your membership now."
      />
      <div className="congrats__confetti">
        <img src={congrats} alt="confetti" />
      </div>
      <Confetti tweenDuration={5000} colors={colors} numberOfPieces={150} />
    </main>
  );
};

export default Congrats;
