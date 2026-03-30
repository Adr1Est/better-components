import api from "@/services/api";

export const signup = async (data: { email: string, password: string, username: string }) => {
  const response = await api.post("/auth/register", data);
  return response.data;
}