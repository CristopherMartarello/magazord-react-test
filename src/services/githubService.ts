import type { TabType } from "@/store/githubStore";
import { api } from "../lib/axios";
import type {
  GithubRepo,
  GithubSocialAccount,
  GithubUser,
} from "../types/github";

export const getUserProfile = async () => {
  const { data } = await api.get<GithubUser>(
    `/users/${import.meta.env.VITE_GITHUB_USERNAME}`
  );
  return data;
};

export const getUserSocials = async () => {
  const { data } = await api.get<GithubSocialAccount[]>(
    `/users/${import.meta.env.VITE_GITHUB_USERNAME}/social_accounts`
  );
  return data;
};

export const getUserRepositories = async (tab: TabType) => {
  const endpoint =
    tab === "repositories"
      ? `/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`
      : `/users/${import.meta.env.VITE_GITHUB_USERNAME}/starred`;

  const { data } = await api.get<GithubRepo[]>(endpoint, {
    params: { per_page: 100 },
  });

  return data;
};

export const getGithubRepoByName = async (name: string) => {
  const { data } = await api.get<GithubRepo>(
    `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${name}`
  );
  return data;
};
