import { create } from "zustand";

export type TabType = "repositories" | "starred";

interface GithubState {
  activeTab: TabType;
  repoType: string[];
  language: string[];
  setActiveTab: (tab: TabType) => void;
  setRepoType: (type: string[]) => void;
  setLanguage: (language: string[]) => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  activeTab: "repositories",
  repoType: [],
  language: [],
  setActiveTab: (tab) => set({ activeTab: tab }),
  setRepoType: (type) => set({ repoType: type }),
  setLanguage: (language) => set({ language }),
}));
