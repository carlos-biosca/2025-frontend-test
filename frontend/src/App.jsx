import "./App.css";
import { useState } from "react";

import Connect from "@components/Connect";
import Verify from "@components/Verify";
import ChoosePlan from "@components/ChoosePlan";
import Congrats from "@components/Congrats";

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <>
      {currentStep === 1 ? <Connect /> : null}
      {currentStep === 2 ? <Verify /> : null}
      {currentStep === 3 ? <ChoosePlan /> : null}
      {currentStep === 4 ? <Congrats /> : null}
    </>
  );
}

export default App;
