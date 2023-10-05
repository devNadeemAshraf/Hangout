import { ReactNode } from "react";

import { Loader } from "lucide-react";
import styles from "./Button.module.css";

type ButtonProps = {
  buttonText: string;
  buttonIcon: ReactNode;
  handleOnClick: () => void;
  loading?: boolean;
};

const Button = ({
  buttonText,
  buttonIcon,
  handleOnClick,
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={handleOnClick}
      disabled={loading}
      className={`${styles.btn}`}
    >
      <span>{buttonText}</span>
      {loading === true ? <Loader className="animate-spin" /> : buttonIcon}
    </button>
  );
};

export default Button;
