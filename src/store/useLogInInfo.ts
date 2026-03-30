import { create } from "zustand";

interface LogInInfoStore {
  accessToken: string;
  setAccessToken: (token: string) => void;
  deleteAccessToken: () => void;
}

export const useLogInInfo = create<LogInInfoStore>((set) => ({
  accessToken: "",
  setAccessToken: (token: string) => set(() => ({ accessToken: token })),
  deleteAccessToken: () => set(() => ({ accessToken: "" })),
}));