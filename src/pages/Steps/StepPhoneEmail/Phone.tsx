import { useState } from "react";

import { setOtp } from "@/store/authSlice";
import { useDispatch } from "react-redux";

import { TStepProps } from "../types";

import { sendOtp } from "@/http";

import { MoveRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import CustomButton from "@/components/shared/CustomButton";
import { CardContent } from "@/components/ui/card";

const Phone = ({ handleStepChange }: TStepProps) => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const onNextClick = async () => {
    if (phoneNumber.trim().length == 10) {
      setLoading(true);
      try {
        // Server Request
        const { data } = await sendOtp({ phone: phoneNumber });
        // Store
        dispatch(
          setOtp({
            phone: data.phone,
            hash: data.hash,
          })
        );

        // Toast
        toast({
          title: "Success",
          description: "Response generated, check console.",
        });

        console.log(data);
      } catch (error) {
        toast({
          title: "HTTP Error",
          description: "Something went wrong, try again later.",
        });
      }
      setLoading(false);
      handleStepChange();
    } else {
      setError("Phone number looks incorrect, please check and try again.");
    }
  };

  return (
    <CardContent>
      <div className="mb-6">
        <Input
          value={phoneNumber}
          type="number"
          placeholder="ex: 12345 67890"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <p className="text-destructive my-2">{error}</p>
      </div>
      <CustomButton
        loading={loading}
        text="Next"
        icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
        onClickHandler={onNextClick}
      />
    </CardContent>
  );
};

export default Phone;
