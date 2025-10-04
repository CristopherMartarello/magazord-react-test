import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
