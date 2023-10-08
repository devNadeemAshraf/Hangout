import MainWrapper from "@/components/shared/MainWrapper";
import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <MainWrapper>
      <Loader className="animate-spin" />
    </MainWrapper>
  );
};

export default Loading;
