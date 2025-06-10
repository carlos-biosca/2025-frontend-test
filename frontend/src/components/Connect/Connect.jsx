import Benefits from "@components/common/Benefits";
import Title from "@components/common/Title";

import "./Connect.css";

const Connect = () => {
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
        <form action="" className="email">
          <input
            type="email"
            placeholder="Email Address"
            className="email__input"
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
          <button type="submit" className="email__button">
            Connect
          </button>
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
