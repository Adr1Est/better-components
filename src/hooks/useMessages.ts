import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage, deleteMessage, getMessages } from "@/services/messages";

export const useMessages = (conversationId: string) => {
  return useQuery({
    queryKey: ["conversation", conversationId],
    queryFn: () => getMessages(conversationId),
    enabled: !!conversationId,
  });
}

export const useCreateMessage = (conversationId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ conversationId, content, model }: { conversationId: string; content: string, model: string }) => createMessage(conversationId, content, model),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversation", conversationId] });
    },
  });
}

export const useDeleteMessage = (conversationId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ messageId }: { messageId: string }) => deleteMessage(messageId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversation", conversationId] });
    }
  });
}