import { api } from "../lib/axios";
import type { GithubSocialAccount, GithubUser } from "../types/github";

export const getUserProfile = async () => {
  const { data } = await api.get<GithubUser>(
    `/users/${import.meta.env.VITE_GITHUB_USERNAME}`
  );
  return data;
};

export const getUserSocials = async () => {
  const { data } = await api.get<GithubSocialAccount[]>(
    `users/${import.meta.env.VITE_GITHUB_USERNAME}/social_accounts`
  );
  return data;
};
