import { useEffect, useState } from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ error }) => {
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    if (!error.includes("30 seconds") || secondsLeft === 0) return;

    const countdown = setTimeout(() => {
      setSecondsLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [secondsLeft, error]);

  const displayMessage = error.includes("30 seconds")
    ? `Please wait ${secondsLeft} seconds before resending`
    : error;

  return <div className="error">{secondsLeft > 0 ? displayMessage : null}</div>;
};

export default ErrorMessage;
