import { refreshToken } from "@/services/auth";
import { useLogInInfo } from "@/store";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import FullScreenLoader from "@/components/shared/FullScreenLoader";

export default function ProtectedRoute() {
  const token = useLogInInfo((state) => state.accessToken);
  const setToken = useLogInInfo((state) => state.setAccessToken);
  const setUserId = useLogInInfo((state) => state.setUserId);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const refresh = async () => {
      try {
        if(token){
          setIsAuth(true);
          setIsLoading(false);
          return;
        }

        const data = await refreshToken();
        setToken(data.token);
        setUserId(data.id);
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    };

    refresh();
  }, []);

  if(isLoading) return <FullScreenLoader />;

  return isAuth ? <Outlet /> : <Navigate to="/" />; 
}