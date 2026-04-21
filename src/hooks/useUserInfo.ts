import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUserData, getUserInfo } from "@/services/user";
import { saveApiKey } from "@/services/key";
import toast from "react-hot-toast";
import { errorToast, successToast } from "@/utils/toasts";

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

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserData,
    onSuccess: () => {
      queryClient.clear();
      toast.success("Cuenta y datos borrados", successToast);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.msg || "Error al eliminar cuenta", errorToast);
    },
  });
}