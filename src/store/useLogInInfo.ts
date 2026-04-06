import { create } from "zustand";

interface LogInInfoStore {
  accessToken: string;
  userId: string;
  setAccessToken: (token: string | undefined) => void;
  deleteAccessToken: () => void;
  setUserId: (id: string) => void;
  deleteUserId: () => void;
}

export const useLogInInfo = create<LogInInfoStore>((set) => ({
  accessToken: "",
  userId: "",
  setAccessToken: (token: string | undefined) => set(() => ({ accessToken: token })),
  deleteAccessToken: () => set(() => ({ accessToken: undefined })),
  setUserId: (id: string) => set(() => ({ userId: id })),
  deleteUserId: () => set(() => ({ userId: "" })),
}));