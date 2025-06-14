import { useFormContext } from "@context/useFormContext";

import Connect from "@components/Connect";
import Verify from "@components/Verify";
import ChoosePlan from "@components/ChoosePlan";
import Congrats from "@components/Congrats";

const steps = [<Connect />, <Verify />, <ChoosePlan />, <Congrats />];

const MultiStepForm = () => {
  const { currentStep } = useFormContext();

  return <>{steps[currentStep]}</>;
};

export default MultiStepForm;
