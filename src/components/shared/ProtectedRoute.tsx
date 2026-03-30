import { refreshToken } from "@/services/auth";
import { useAccessToken } from "@/store";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const setToken = useAccessToken((state) => state.setAccessToken);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const refresh = async () => {
      try {
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

  if(isLoading) return null;

  return isAuth ? <Outlet /> : <Navigate to="/" />; 
}