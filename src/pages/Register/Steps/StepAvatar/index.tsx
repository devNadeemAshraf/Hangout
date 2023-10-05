import styles from "./StepAvatar.module.css";

import { MoveRight } from "lucide-react";

import Button from "@/components/shared/Button";

import { TRegisterStepProps } from "../../types";

const StepAvatar = ({ handleStepChange }: TRegisterStepProps) => {
  return (
    <div>
      StepAvatar{" "}
      <Button
        handleOnClick={handleStepChange}
        buttonText="Next"
        buttonIcon={<MoveRight />}
      />
    </div>
  );
};

export default StepAvatar;
