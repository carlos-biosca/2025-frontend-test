import { useState, useRef, useEffect } from "react";
import { useFormContext } from "@context/useFormContext";

import Title from "@components/common/Title";
import Benefits from "@components/common/Benefits";
import DigitInput from "@components/common/DigitInput";
import SubmitButton from "@components/common/SubmitButton";
import ErrorMessage from "@components/common/ErrorMessage";

import submitEmail from "@logic/submitEmail";
import verifyCode from "@logic/verifyCode";
import leftArrow from "@assets/left-arrow.svg";
import "./Verify.css";

const initialCode = Array(6).fill("");

const Verify = () => {
  const { email, prevStep, nextStep, setUserId, emailCode, setEmailCode } =
    useFormContext();
  const inputs = useRef([]);
  const [error, setError] = useState("");
  const [code, setCode] = useState(initialCode);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (emailCode) {
      setCountdown(300);
      const interval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(interval);
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [emailCode]);

  const handleDigitChange = (e, index) => {
    const { value } = e.target;
    const isDigit = value.replace(/[^0-9]/g, "").slice(0, 1);
    const newCode = [...code];
    newCode[index] = isDigit;
    setCode(newCode);

    if (index < 5 && isDigit) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const stringCode = code.join("");
    const res = await verifyCode(email, stringCode);
    setCode(initialCode);
    if (res.user_id) {
      setUserId(res.user_id);
      setEmailCode(null);
      nextStep();
    }
    if (res.error) setError(res.error);
  };

  const handleResend = async e => {
    e.preventDefault();
    setError("");
    const res = await submitEmail(email);
    if (res.code) setEmailCode(res.code);
    if (res.error) setError(res.error);
  };

  return (
    <main className="verify">
      <button type="button" onClick={prevStep} className="verify__back">
        <img src={leftArrow} alt="<" />
        <span>Modify email</span>
      </button>
      <section className="verify__section">
        <Title
          title="Get Verified!"
          subtitle="Enter the one-time code we sent to:"
          email={email}
          classes="only-mobile"
        />
        <Benefits />
        {countdown > 0 ? (
          <div className="verify__code">
            Code <span className="verify__code--bold">{emailCode}</span> is
            valid for{" "}
            <span className="verify__countdown">{`${Math.floor(
              countdown / 60
            )}:${(countdown % 60).toString().padStart(2, "0")}`}</span>
          </div>
        ) : null}
      </section>
      <section>
        <Title
          title="Get Verified!"
          subtitle="Enter the one-time code we sent to:"
          email={email}
          classes="only-desktop"
        />
        <form action="POST" onSubmit={handleSubmit} className="digits">
          <div className="digits__container">
            {Array.from({ length: 6 }, (_, i) => (
              <DigitInput
                ref={el => (inputs.current[i] = el)}
                handleDigitChange={e => handleDigitChange(e, i)}
                value={code[i]}
                key={i}
              />
            ))}
          </div>
          <p className="resend only-desktop">
            Didn't get an email? <span onClick={handleResend}>Resend Code</span>
          </p>
          <SubmitButton text="Verify" />
          <ErrorMessage error={error} />
        </form>
        <p className="resend only-mobile">
          Didn't get an email? <span onClick={handleResend}>Resend Code</span>
        </p>
      </section>
    </main>
  );
};

export default Verify;
