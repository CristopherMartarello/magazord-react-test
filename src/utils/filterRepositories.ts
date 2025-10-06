import type { GithubRepo } from "@/types/github";

export const filterRepositories = (
  repos: GithubRepo[],
  types: string[] = [],
  languages: string[] = [],
  searchTerm: string = ""
) => {
  let reposFiltered = repos;

  const hasLanguageFilter = languages.length > 0 && !languages.includes("All");
  const hasTypeFilter = types.length > 0 && !types.includes("All");
  const hasSearchTerm = searchTerm.trim().length > 0;

  if (hasLanguageFilter) {
    reposFiltered = reposFiltered.filter(
      (repo) =>
        repo.language &&
        languages.some(
          (lang) => lang.toLowerCase() === repo.language?.toLowerCase()
        )
    );
  }

  if (hasTypeFilter) {
    reposFiltered = reposFiltered.filter((repo) =>
      types.some((type) => {
        const key = type.toLowerCase();
        return (
          (key === "sources" &&
            !repo.fork &&
            !repo.archived &&
            !repo.mirror_url) ||
          (key === "forks" && repo.fork) ||
          (key === "archived" && repo.archived) ||
          (key === "mirrors" && repo.mirror_url)
        );
      })
    );
  }

  if (hasSearchTerm) {
    reposFiltered = reposFiltered.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return reposFiltered;
};
