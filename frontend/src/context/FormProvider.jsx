import { useState } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        email,
        setEmail,
        userId,
        setUserId
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
