import { getGithubRepoByName } from "@/services/githubService";
import type { GithubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGithubRepository = (owner?: string, name?: string) => {
  return useQuery<GithubRepo>({
    queryKey: ["github", "repo", owner, name],
    queryFn: () => getGithubRepoByName(owner!, name!),
    enabled: !!owner && !!name,
  });
};
