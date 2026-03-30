import { refreshToken } from "@/services/auth";
import { useAccessToken } from "@/store"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useRefreshToken = () => {
  const setToken = useAccessToken((state) => state.setAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    const refresh = async () => {
      try {
        const data = await refreshToken();
        setToken(data.token);
      } catch (error) {
        if(axios.isAxiosError(error)){
          console.log(error.response?.data.msg);
        }
        navigate("/");
      }
    };

    refresh();
  }, []);
}