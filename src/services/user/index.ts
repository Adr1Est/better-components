import api from "@/services/api"

export const getUserInfo = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
}