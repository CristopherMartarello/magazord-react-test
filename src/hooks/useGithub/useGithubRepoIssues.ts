import { getGithubRepoIssues } from "@/services/githubService";
import type { GithubIssue } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

export const useGithubRepoIssues = (owner?: string, name?: string) => {
  return useQuery<GithubIssue[]>({
    queryKey: ["github", "repo", owner, name, "issues"],
    queryFn: () => getGithubRepoIssues(owner!, name!),
    enabled: !!owner && !!name,
  });
};
