import { Link } from "react-router-dom";
import { logout } from "@/http";

import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { setAuth, setUser } from "@/store/authSlice";

const Navigation = () => {
  const authSelector = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(
        setUser({
          user: data.user,
        })
      );
      dispatch(setAuth(data.auth));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-full h-14 flex items-center justify-between px-4">
      {authSelector.isAuth && authSelector.user.activated ? (
        <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-sm transition-colors cursor-pointer">
          <span className="font-medium text-lg no-underline">😎 Hangout</span>
        </div>
      ) : (
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-2 py-1 rounded-sm transition-colors"
        >
          <span className="font-medium text-lg">😎 Hangout</span>
        </Link>
      )}
      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />
        {authSelector.isAuth && authSelector.user.activated ? (
          <Button onClick={logoutUser}>Logout</Button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
