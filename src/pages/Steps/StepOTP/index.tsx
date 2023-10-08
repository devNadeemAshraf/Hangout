/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { setAuth, setUser } from "@/store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

import { verifyOtp } from "@/http";

import { TStepProps } from "../types";

import { MoveRight } from "lucide-react";

import CustomCard from "@/components/shared/CustomCard";
import CustomButton from "@/components/shared/CustomButton";

import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";

const StepOTP = ({ handleStepChange }: TStepProps) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const otpStateData = useSelector((state: RootState) => state.auth.otp);
  const dispatch = useDispatch();

  const onNextClick = async () => {
    if (!(otp.trim().length === 0)) {
      setLoading(true);
      try {
        const { data } = await verifyOtp({
          otp,
          hash: otpStateData?.hash,
          phone: otpStateData?.phone,
        });
        dispatch(setAuth(data.auth));
        dispatch(
          setUser({
            user: data.user,
          })
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      handleStepChange();
    }
  };

  return (
    <CustomCard
      title="️🔒 Verify OTP"
      description="Enter the One Time Password that you have received"
    >
      <CardContent className="flex flex-col items-start gap-2">
        {/* Will have to modify this later */}
        <Input
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <p className="text-xs">
          You can resend the OTP in :{" "}
          <span className="font-medium">1m 21s</span>
        </p>
      </CardContent>
      <CardFooter className="w-full flex flex-col items-start gap-4">
        <CustomButton
          loading={loading}
          text="Next"
          icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
          onClickHandler={onNextClick}
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

export default StepOTP;
