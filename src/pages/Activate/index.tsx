import { useState } from "react";

import { TActivationSteps, TSteps } from "./types";

import MainWrapper from "@/components/shared/MainWrapper";

// Steps
import StepName from "@/pages/Steps/StepName";
import StepAvatar from "@/pages/Steps/StepAvatar";
import { useNavigate } from "react-router-dom";

const activationSteps: TActivationSteps = {
  1: StepName,
  2: StepAvatar,
};

const Activate = () => {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState<TSteps>(1);
  const CurrentStep = activationSteps[stepIndex];

  const handleStepChange = () => {
    switch (stepIndex) {
      case 1: {
        setStepIndex(2);
        console.log("Full Name Complete");
        break;
      }
      case 2: {
        /**
         * Component will sign in at this stage
         */
        navigate("/rooms");
        console.log("Avatar Complete");
        break;
      }
      default: {
        console.log("Default");
      }
    }
  };

  const handleStepChangeBack = () => {
    setStepIndex(1);
  };

  return (
    <MainWrapper>
      <CurrentStep
        handleStepChangeBack={handleStepChangeBack}
        handleStepChange={handleStepChange}
      />
    </MainWrapper>
  );
};

export default Activate;
