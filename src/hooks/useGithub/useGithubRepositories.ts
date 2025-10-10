import { useQuery } from "@tanstack/react-query";
import { getUserRepositories } from "@/services/githubService";
import { useGithubStore } from "@/store/githubStore";
import type { GithubRepo } from "@/types/github";

export const useGithubRepositories = () => {
  const activeTab = useGithubStore((state) => state.activeTab);
  const setRepoCount = useGithubStore((state) => state.setRepoCount);
  const setStarredCount = useGithubStore((state) => state.setStarredCount);

  return useQuery<GithubRepo[]>({
    queryKey: ["github", activeTab],
    queryFn: async () => {
      const data = await getUserRepositories(activeTab);
      if (activeTab === "repositories") setRepoCount(data.length);
      if (activeTab === "starred") setStarredCount(data.length);
      return data;
    },
    enabled: !!activeTab,
  });
};
