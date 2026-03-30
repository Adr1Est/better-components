import api from "@/services/api";

export const login = async (data: { email: string, password: string }) => {
  const response = await api.post("/auth/login", data);
  return response.data;
}

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
}