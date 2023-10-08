import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TStepProps } from "../types";

import { RootState } from "@/store";

import { setName } from "@/store/activateSlice";

import { MoveRight } from "lucide-react";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import CustomCard from "@/components/shared/CustomCard";
import CustomButton from "@/components/shared/CustomButton";

const StepName = ({ handleStepChange }: TStepProps) => {
  const { name } = useSelector((state: RootState) => state.activate);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [fullName, setFullName] = useState(name);

  const handleOnNextClick = () => {
    setLoading(true);
    if (!(fullName.trim() === "")) {
      dispatch(setName({ name: fullName }));
    }
    setLoading(false);
    handleStepChange();
  };
  return (
    <CustomCard
      className="animate-fade-in"
      title="️👤 Your Name ?"
      description="Please Enter your full name"
    >
      <CardContent className="flex flex-col items-start gap-2">
        {/* Will have to modify this later */}
        <Input
          type="text"
          value={fullName}
          placeholder="ex: John Doe"
          onChange={(e) => setFullName(e.target.value)}
        />
        <p className="text-muted-foreground text-sm">
          (●'◡'●) Its better to use your original name
        </p>
      </CardContent>
      <CardFooter className="w-full flex flex-col items-start gap-4">
        <CustomButton
          className="w-full"
          loading={loading}
          text="Set Avatar"
          icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
          onClickHandler={handleOnNextClick}
        />
      </CardFooter>
    </CustomCard>
  );
};

export default StepName;
