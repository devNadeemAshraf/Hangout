import styles from "./StepUsername.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { TRegisterStepProps } from "../../types";

const StepUsername = ({ handleStepChange }: TRegisterStepProps) => {
  return (
    <div>
      StepUsername{" "}
      <Button
        handleOnClick={handleStepChange}
        buttonText="Next"
        buttonIcon={<MoveRight />}
      />
    </div>
  );
};

export default StepUsername;
