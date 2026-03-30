import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/services/user";

export const useUserInfo = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserInfo(userId),
    enabled: !!userId,
  });
}