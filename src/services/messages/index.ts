import api from "@/services/api";

export const getMessages = async (id: string) => {
  const response = await api.get(`/conversation/${id}/messages`);
  return response.data;
}