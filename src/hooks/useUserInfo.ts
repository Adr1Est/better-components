import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfo } from "@/services/user";
import { saveApiKey } from "@/services/key";

export const useUserInfo = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserInfo(userId),
    enabled: !!userId,
  });
}

export const useSaveApiKey = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, apiKey }: { id: string; apiKey: string;}) => saveApiKey(id, apiKey),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}