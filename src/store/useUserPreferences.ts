import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface UserPreferencesStore {
  hasSeenOnboarding: boolean;
  setHasSeenOnboarding: (value: boolean) => void;
}

export const useUserPreferences = create<UserPreferencesStore>()(
  persist(
    (set) => ({
      hasSeenOnboarding: true,
      setHasSeenOnboarding: (value: boolean) => set(() => ({ hasSeenOnboarding: value })),
    }),
    { name: "user-prefs"}
  )
);