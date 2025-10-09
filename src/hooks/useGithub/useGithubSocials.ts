import { useQuery } from "@tanstack/react-query";
import { getUserSocials } from "../../services/githubService";
import type { GithubSocialAccount } from "@/types/github";

export const useGithubSocials = () => {
  return useQuery<GithubSocialAccount[]>({
    queryKey: ["github", "socials"],
    queryFn: getUserSocials,
  });
};
