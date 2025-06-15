import { useEffect, useState } from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ error }) => {
  const initialCountdown = 30;
  const hasCountdown = error.includes("30 seconds");

  const [secondsLeft, setSecondsLeft] = useState(initialCountdown);

  useEffect(() => {
    if (hasCountdown) {
      setSecondsLeft(initialCountdown);
    }
  }, [hasCountdown]);

  useEffect(() => {
    if (!hasCountdown || secondsLeft === 0) return;

    const countdown = setTimeout(() => {
      setSecondsLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearTimeout(countdown);
  }, [secondsLeft, hasCountdown]);

  if (hasCountdown) {
    return (
      <p className="error">
        Please wait {secondsLeft} seconds before resending
      </p>
    );
  }

  return <p className="error">{error}</p>;
};

export default ErrorMessage;
