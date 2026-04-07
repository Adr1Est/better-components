import api from "@/services/api";

export const saveApiKey = async (id: string, apiKey: string) => {
  const response = await api.put(`/key/${id}`, { apiKey });
  return response.data;
}