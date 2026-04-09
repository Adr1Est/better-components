import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage, getMessages } from "@/services/messages";

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
    mutationFn: ({ conversationId, content }: { conversationId: string; content: string }) => createMessage(conversationId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversation", conversationId] });
    },
  });
}