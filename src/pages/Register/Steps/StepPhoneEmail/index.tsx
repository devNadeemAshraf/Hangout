import styles from "./StepPhoneEmail.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { TRegisterStepProps } from "../../types";

const StepPhoneEmail = ({ handleStepChange }: TRegisterStepProps) => {
  return (
    <div>
      StepPhoneEmail
      <Button
        handleOnClick={handleStepChange}
        buttonText="Next"
        buttonIcon={<MoveRight />}
      />
    </div>
  );
};

export default StepPhoneEmail;
