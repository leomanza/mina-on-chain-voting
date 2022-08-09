import create from "zustand";

import type { Network } from "@/types";
import { isDev } from "@/utils/devMode";

interface AppStore {
  devMode: boolean;
  darkMode: boolean;
  network: Network;
  settingsActive: boolean;
  searchActive: boolean;
  setDarkMode: (value: boolean) => void;
  setNetwork: (network: Network) => void;
  setSettingsState: (value: boolean) => void;
  setSearchState: (value: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  devMode: isDev(),
  darkMode: false,
  network: "Devnet",
  settingsActive: false,
  searchActive: false,
  setDarkMode: (v: boolean) => {
    set(() => ({ darkMode: v }));
  },
  setNetwork: (n: Network) => {
    set(() => ({ network: n }));
  },
  setSettingsState: (v: boolean) => {
    set(() => ({ settingsActive: v }));
  },
  setSearchState: (v: boolean) => {
    set(() => ({ searchActive: v }));
  },
}));