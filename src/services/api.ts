import { useLogInInfo } from "@/store";
import axios from "axios";
import { refreshToken } from "@/services/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useLogInInfo.getState().accessToken;

  if(token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const data = await refreshToken();
        useLogInInfo.getState().setAccessToken(data.token);
        useLogInInfo.getState().setUserId(data.id);

        originalRequest.headers["Authorization"] = `Bearer ${data.token}`;
        return api(originalRequest);
      } catch {
        useLogInInfo.getState().setAccessToken(undefined);
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default api;