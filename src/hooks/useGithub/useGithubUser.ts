import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/githubService";

export const useGithubUser = () => {
  return useQuery({
    queryKey: ["github", "user"],
    queryFn: getUserProfile,
  });
};
