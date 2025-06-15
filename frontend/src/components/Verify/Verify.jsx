import { useState, useRef } from "react";
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
  const { email, prevStep, nextStep, setUserId } = useFormContext();
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState("");
  const inputs = useRef([]);

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
    const stringCode = code.join("");
    const res = await verifyCode(e, email, stringCode);
    setCode(initialCode);
    if (res.user_id) {
      setUserId(res.user_id);
      nextStep();
    }
    if (res.error) setError(res.error);
  };

  const handleResend = async e => {
    setError("");
    const res = await submitEmail(e, email);
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
