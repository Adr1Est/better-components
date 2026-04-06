import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/services/messages";

export const useMessages = (conversationId: string) => {
  return useQuery({
    queryKey: ["conversation", conversationId],
    queryFn: () => getMessages(conversationId),
    enabled: !!conversationId,
  });
}