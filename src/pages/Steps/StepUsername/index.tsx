import { useState } from "react";
import { TStepProps } from "../types";

import { MoveRight } from "lucide-react";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import CustomCard from "@/components/shared/CustomCard";
import CustomButton from "@/components/shared/CustomButton";

const StepUsername = ({ handleStepChange }: TStepProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  
  return (
    <CustomCard
      title="️🔒 Username"
      description="Please choose a desired username"
    >
      <CardContent className="flex flex-col items-start gap-2">
        {/* Will have to modify this later */}
        <Input
          type="text"
        />
      </CardContent>
      <CardFooter className="w-full flex flex-col items-start gap-4">
        <CustomButton
          loading={loading}
          text="Next"
          icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
        />
        <p className="w-full text-xs text-center font-thin">
          By clicking Next you are agreeing to our{" "}
          <span className="text-blue-700 dark:text-blue-200 font-medium">
            Terms and Conditions
          </span>
        </p>
      </CardFooter>
    </CustomCard>
  );
};

export default StepUsername;
