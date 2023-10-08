import { ReactNode } from "react";
import { Loader } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";

type CustomButtonProps = ButtonProps & {
  text: string;
  loading?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClickHandler?: () => void;
};

const CustomButton = ({
  text,
  loading,
  icon,
  type,
  className,
  onClickHandler,
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      className={className}
      type={type}
      onClick={onClickHandler}
      disabled={loading}
      {...props}
    >
      {text} {loading ? <Loader className="w-4 h-4 ml-2 animate-spin" /> : icon}
    </Button>
  );
};

export default CustomButton;
