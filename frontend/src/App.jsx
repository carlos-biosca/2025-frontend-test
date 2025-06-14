import "./App.css";

import MultiStepForm from "@components/MultiStepForm";
import { FormProvider } from "@context/FormProvider";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;
