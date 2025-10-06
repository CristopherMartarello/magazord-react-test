import { getGithubRepoByName } from "@/services/githubService";
import type { GithubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGithubRepository = (name?: string) => {
  return useQuery<GithubRepo>({
    queryKey: ["github", "repo", name],
    queryFn: () => getGithubRepoByName(name!),
    enabled: !!name,
  });
};
