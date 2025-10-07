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

export type GithubRepo = {
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
};

export type GithubIssue = {
  id: number;
  number: number;
  title: string;
  state: "open" | "closed";
  comments: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  body?: string;
  user: {
    login: string;
    avatar_url: string;
    html_url?: string;
  };
  labels: {
    id: number;
    name: string;
    color: string;
    description?: string;
  }[];
};
