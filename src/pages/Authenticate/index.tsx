import { useState } from "react";

import { TAuthenticateSteps, TSteps } from "./types";

import MainWrapper from "@/components/shared/MainWrapper";

// Steps
import StepPhoneEmail from "@/pages/Steps/StepPhoneEmail";
import StepOTP from "@/pages/Steps/StepOTP";

const authSteps: TAuthenticateSteps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Authenticate = () => {
  const [stepIndex, setStepIndex] = useState<TSteps>(1);
  const CurrentStep = authSteps[stepIndex];

  const handleStepChange = () => {
    switch (stepIndex) {
      case 1: {
        setStepIndex(2);
        console.log("Move to step 2");
        break;
      }
      case 2: {
        /**
         * Component will sign in at this stage
         */
        console.log("Sign In User");
        break;
      }
      default: {
        console.log("Default");
      }
    }
  };

  return (
    <MainWrapper>
      <CurrentStep handleStepChange={handleStepChange} />
    </MainWrapper>
  );
};

export default Authenticate;
