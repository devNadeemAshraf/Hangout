import { useState } from "react";
import styles from "./Login.module.css";

import Card from "@/components/shared/CustomCard";

// Steps
import StepPhoneEmail from "./Steps/StepPhoneEmail";
import StepOTP from "./Steps/StepOTP";

import { TLoginSteps, TSteps } from "./types";

const loginSteps: TLoginSteps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Login = () => {
  const [stepIndex, setStepIndex] = useState<TSteps>(1);

  const CurrentStep = loginSteps[stepIndex];

  const handleStepChange = () => {
    switch (stepIndex) {
      case 1: {
        setStepIndex(2);
        break;
      }
      case 2: {
        // Sign In
        console.log("Sign In User");
        break;
      }
      default: {
        console.log("Default");
      }
    }
  };

  return (
    <main className="mainWrapper">
      <Card title="Login" titleEmoji="❤️">
        {<CurrentStep handleStepChange={handleStepChange} />}
      </Card>
    </main>
  );
};

export default Login;
