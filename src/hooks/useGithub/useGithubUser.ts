import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/githubService";
import type { GithubUser } from "@/types/github";

export const useGithubUser = () => {
  return useQuery<GithubUser>({
    queryKey: ["github", "user"],
    queryFn: getUserProfile,
  });
};
