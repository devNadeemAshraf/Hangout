/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TStepProps } from "../types";

import { setAvatar } from "@/store/activateSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { activateUser } from "@/http";

import { MoveLeft, MoveRight } from "lucide-react";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import CustomCard from "@/components/shared/CustomCard";
import CustomButton from "@/components/shared/CustomButton";
import { setAuth, setUser } from "@/store/authSlice";

const StepAvatar = ({ handleStepChange, handleStepChangeBack }: TStepProps) => {
  const { name, avatar } = useSelector((state: RootState) => state.activate);
  const dispatch = useDispatch();

  const [avatarUrl, setAvatarUrl] = useState<string>(avatar);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Finish Onboarding
      const { data } = await activateUser({ name, avatar });
      if (data) {
        dispatch(setAuth(true));
        dispatch(
          setUser({
            user: data.user,
          })
        );
      }
      console.log(data);
      handleStepChange();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      const avatarUrl = fileReader.result as string;
      // Update Store
      dispatch(
        setAvatar({
          avatar: avatarUrl,
        })
      );
      // Set It in Image src
      setAvatarUrl(avatarUrl);
    };
  };

  return (
    <CustomCard
      className="animate-fade-in"
      title={`👽 Hello, ${name}`}
      description="Now please choose a profile picture"
    >
      <CardContent className="flex flex-col items-center gap-2">
        {/* Will have to modify this later */}
        <Label htmlFor="avatar-input">
          <Avatar className="w-[80px] h-[80px] cursor-pointer outline outline-primary">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </Label>
        <Input
          onChange={handleImageUpload}
          id="avatar-input"
          type="file"
          className="hidden"
        />
        <p className="text-muted-foreground text-sm mt-4">
          Just click Finish if you want to skip uploading an image.
        </p>
      </CardContent>
      <CardFooter className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex items-center justify-center gap-4">
          <CustomButton
            variant={"outline"}
            loading={loading}
            text="Back"
            icon={<MoveLeft className="w-4 h-4 ml-2 mt-1" />}
            onClickHandler={handleStepChangeBack}
          />
          <CustomButton
            className="flex-1"
            loading={loading}
            text="Finish"
            icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
            onClickHandler={handleSubmit}
          />
        </div>
      </CardFooter>
    </CustomCard>
  );
};

export default StepAvatar;
