import { useAccessToken } from "@/store";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAccessToken.getState().accessToken;

  if(token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default api;