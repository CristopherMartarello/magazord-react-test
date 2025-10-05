import { create } from "zustand";

export type TabType = "repositories" | "starred";

interface GithubState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  activeTab: "repositories",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
