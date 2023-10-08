import styles from "./StepPhoneEmail.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/CustomButton";

import { TLoginStepProps } from "../../types";

const StepPhoneEmail = ({ handleStepChange }: TLoginStepProps) => {
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
