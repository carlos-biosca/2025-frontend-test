import { useState } from "react";
import { useFormContext } from "@context/useFormContext";

import Benefits from "@components/common/Benefits";
import Title from "@components/common/Title";
import SubmitButton from "@components/common/SubmitButton";
import ErrorMessage from "@components/common/ErrorMessage";

import submitEmail from "@logic/submitEmail";
import "./Connect.css";

const Connect = () => {
  const { email, setEmail, nextStep, setEmailCode } = useFormContext();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = e => setEmail(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const res = await submitEmail(email);
    setIsLoading(false);
    if (res.code) {
      setEmailCode(res.code);
      nextStep();
    }
    if (res.error) setError(res.error);
  };

  return (
    <main className="connect">
      <section>
        <Title
          title="Connect Your Account"
          subtitle="...and unlock your benefits!"
          classes="only-mobile"
        />
        <Benefits />
        <small className="connect__terms only-desktop">
          By continuing, you agree to our <span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy</span>.
        </small>
      </section>
      <section>
        <Title
          title="Connect Your Account"
          subtitle="...and unlock your benefits!"
          classes="only-desktop"
        />
        <form
          action="GET"
          onSubmit={handleSubmit}
          autoComplete="off"
          className="email"
        >
          <input
            type="text"
            placeholder="Email Address"
            className="email__input"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="offers" className="email__label">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              className="email__checkbox"
            />
            Send Me Offers, News, and Fun Stuff!
          </label>
          <SubmitButton text="Connect" isLoading={isLoading} />
          <ErrorMessage error={error} />
        </form>
        <small className="connect__terms only-mobile">
          By continuing, you agree to our <span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy</span>.
        </small>
      </section>
    </main>
  );
};

export default Connect;
