import styles from "./StepOTP.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/CustomButton";

import { TLoginStepProps } from "../../types";

const StepOTP = ({ handleStepChange }: TLoginStepProps) => {
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
