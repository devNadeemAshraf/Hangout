import styles from "./StepName.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { TRegisterStepProps } from "../../types";

const StepName = ({ handleStepChange }: TRegisterStepProps) => {
  return (
    <div>
      StepName{" "}
      <Button
        handleOnClick={handleStepChange}
        buttonText="Next"
        buttonIcon={<MoveRight />}
      />
    </div>
  );
};

export default StepName;
