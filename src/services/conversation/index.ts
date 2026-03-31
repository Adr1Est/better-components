import api from "@/services/api";

export const createNewChat = async (id: string, title: string) => {
  const response = await api.post(`/conversation/${id}`, { title });
  return response.data;
}

export const getChats = async (id: string) => {
  const response = await api.get(`/conversation/${id}`);
  return response.data;
}