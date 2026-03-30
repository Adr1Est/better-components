import { create } from "zustand";

interface AccessTokenStore {
  accessToken: string;
  setAccessToken: (token: string) => void;
  deleteAccessToken: () => void;
}

export const useAccessToken = create<AccessTokenStore>((set) => ({
  accessToken: "",
  setAccessToken: (token: string) => set(() => ({ accessToken: token })),
  deleteAccessToken: () => set(() => ({ accessToken: "" })),
}));