export type GithubUser = {
  avatar_url: string;
  url: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
};

export type GithubSocialAccount = {
  provider: string;
  url: string;
};
export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  fork: boolean;
  visibility: "public" | "private";
  mirror_url: string | null;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
}
