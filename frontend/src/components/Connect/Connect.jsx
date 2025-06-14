import { useState } from "react";

import Benefits from "@components/common/Benefits";
import Title from "@components/common/Title";
import SubmitButton from "@components/common/SubmitButton";

import submitEmail from "@logic/submitEmail";
import "./Connect.css";

const Connect = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);

  const handleSubmit = async e => {
    const res = await submitEmail(e, email);
    if (res.error) setError(res.error);
    else nextStep();
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
          action="POST"
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
          <SubmitButton text="Connect" />
          <p className="email__error">{error}</p>
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
