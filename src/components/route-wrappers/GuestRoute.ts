import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const GuestRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/rooms");
    }
  }, [isAuth]);

  return children;
};

export default GuestRoute;
