import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const SemiProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    } else if (isAuth && user.activated) {
      navigate("/rooms");
    }
  }, [isAuth]);

  return children;
};

export default SemiProtectedRoute;
