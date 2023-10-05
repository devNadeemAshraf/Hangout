import styles from "./StepOTP.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { TRegisterStepProps } from "../../types";

const StepOTP = ({ handleStepChange }: TRegisterStepProps) => {
  return (
    <div>
      StepOTP{" "}
      <Button
        handleOnClick={handleStepChange}
        buttonText="Next"
        buttonIcon={<MoveRight />}
      />
    </div>
  );
};

export default StepOTP;
