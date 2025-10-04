import { useQuery } from "@tanstack/react-query";
import { getUserSocials } from "../../services/githubService";

export const useGithubSocials = () => {
  return useQuery({
    queryKey: ["github", "socials"],
    queryFn: getUserSocials,
  });
};
