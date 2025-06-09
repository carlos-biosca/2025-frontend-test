import "./App.css";
import { useState } from "react";

import Connect from "./components/Connect.jsx";
import Verify from "./components/Verify.jsx";
import ChoosePlan from "./components/ChoosePlan.jsx";
import Congrats from "./components/Congrats.jsx";

function App() {
  const [step, setStep] = useState(1);

  const next = () => setStep(prevStep => prevStep + 1);
  const prev = () => setStep(prevStep => prevStep - 1);

  return (
    <>
      {step === 1 && <Connect />}
      {step === 2 && <Verify />}
      {step === 3 && <ChoosePlan />}
      {step === 4 && <Congrats />}
    </>
  );
}

export default App;
