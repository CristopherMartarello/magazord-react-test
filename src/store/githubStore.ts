import { create } from "zustand";

export type TabType = "repositories" | "starred";

interface GithubState {
  activeTab: TabType;
  repoType: string[];
  language: string[];
  repoCount: number;
  starredCount: number;
  searchTerm: string;
  setActiveTab: (tab: TabType) => void;
  setRepoType: (type: string[]) => void;
  setLanguage: (language: string[]) => void;
  setRepoCount: (count: number) => void;
  setStarredCount: (count: number) => void;
  setSearchTerm: (term: string) => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  activeTab: "repositories",
  repoType: [],
  language: [],
  repoCount: 0,
  starredCount: 0,
  searchTerm: "",
  setActiveTab: (tab) => set({ activeTab: tab }),
  setRepoType: (type) => set({ repoType: type }),
  setLanguage: (language) => set({ language }),
  setRepoCount: (count) => set({ repoCount: count }),
  setStarredCount: (count) => set({ starredCount: count }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
