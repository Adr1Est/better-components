import { createNewChat, deleteChat, getChats } from "@/services/conversation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useChats = (userId: string) => {
  return useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getChats(userId),
    enabled: !!userId,
  });
}

export const useCreateChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({userId, title}: { userId: string; title: string }) => createNewChat(userId, title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
  });
}

export const useDeleteChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (chatId: string) => deleteChat(chatId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
  });
}