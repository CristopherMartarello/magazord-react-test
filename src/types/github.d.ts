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
