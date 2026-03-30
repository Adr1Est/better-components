import { refreshToken } from "@/services/auth";
import { useAccessToken } from "@/store";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import FullScreenLoader from "@/components/shared/FullScreenLoader";

export default function ProtectedRoute() {
  const token = useAccessToken((state) => state.accessToken);
  const setToken = useAccessToken((state) => state.setAccessToken);
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