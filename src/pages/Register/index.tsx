import { useState } from "react";
import styles from "./Register.module.css";

import Card from "@/components/shared/CustomCard";

// Steps
import StepPhoneEmail from "./Steps/StepPhoneEmail";
import StepOTP from "./Steps/StepOTP";
import StepName from "./Steps/StepName";
import StepAvatar from "./Steps/StepAvatar";
import StepUsername from "./Steps/StepUsername";

// Types
import { TRegisterationSteps, TSteps } from "./types";

const registerationSteps: TRegisterationSteps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [stepIndex, setStepIndex] = useState<TSteps>(1);

  const CurrentStep = registerationSteps[stepIndex];

  const handleStepChange = () => {
    switch (stepIndex) {
      case 1: {
        setStepIndex(2);
        break;
      }
      case 2: {
        setStepIndex(3);
        break;
      }
      case 3: {
        setStepIndex(4);
        break;
      }
      case 4: {
        setStepIndex(5);
        break;
      }
      case 5: {
        console.log("Finish Obnoarding");
        break;
      }
      default: {
        console.log("Default");
      }
    }
  };

  return (
    <main className="mainWrapper">
      <Card title="Register New Account" titleEmoji="❤️">
        {<CurrentStep handleStepChange={handleStepChange} />}
      </Card>
    </main>
  );
};

export default Register;
