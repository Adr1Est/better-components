import api from "@/services/api";

export const getMessages = async (id: string) => {
  const response = await api.get(`/conversation/${id}/messages`);
  return response.data;
}

export const createMessage = async (id: string, content: string, model: string) => {
  const response = await api.post(`/message/${id}`, { content, model });
  return response.data;
}