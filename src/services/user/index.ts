import api from "@/services/api"

export const getUserInfo = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
}

export const deleteUserData = async () => {
  const response = await api.delete("/user");
  return response.data;
}