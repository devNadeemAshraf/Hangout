import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { setAuth, setUser } from "@/store/authSlice";

export function useLoadingWithRefresh() {
  const dispatch = useDispatch();
  const [appLoading, setAppLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/refresh`,
          {
            withCredentials: true,
          }
        );
        dispatch(setAuth(true));
        dispatch(
          setUser({
            user: data.user,
          })
        );
        setAppLoading(false);
      } catch (error) {
        console.log(error);
        setAppLoading(false);
      }
    })();
  }, []);

  return {
    appLoading,
  };
}
