import { useNavigate } from "react-router-dom";

import { MoveRight } from "lucide-react";

import { CardContent, CardFooter } from "@/components/ui/card";

import MainWrapper from "@/components/shared/MainWrapper";
import CustomCard from "@/components/shared/CustomCard";
import CustomButton from "@/components/shared/CustomButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <CustomCard className="animate-fade-in" title="😎 Hangout Welcomes You!">
        <CardContent>
          Cherish moments with your friends and family without worrying about
          privacy 👀
        </CardContent>
        <CardFooter className="w-full flex flex-col items-start gap-4">
          <CustomButton
            onClickHandler={() => navigate("/authenticate")}
            text="Continue"
            icon={<MoveRight className="w-4 h-4 ml-2 mt-1" />}
          />
          <p className="w-full text-xs text-center font-thin">
            By Signing Up/In you are agreeing to our{" "}
            <span className="text-blue-700 dark:text-blue-200 font-medium">Terms and Conditions</span>
          </p>
        </CardFooter>
      </CustomCard>
    </MainWrapper>
  );
};

export default Home;
