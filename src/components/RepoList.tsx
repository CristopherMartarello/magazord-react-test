import { useGithubRepositories } from "@/hooks/useGithub/useGithubRepositories";
import { useGithubStore } from "@/store/githubStore";
import RepoItem from "./RepoItem";
import { useMemo } from "react";
import { filterRepositories } from "@/utils/filterRepositories";
import Spinner from "./Spinner";

const RepoList = () => {
  const repoType = useGithubStore((state) => state.repoType);
  const language = useGithubStore((state) => state.language);
  const searchTerm = useGithubStore((state) => state.searchTerm);

  const {
    data: repos = [],
    isLoading: loadingRepos,
    isError: errorRepos,
  } = useGithubRepositories();

  const filteredRepos = useMemo(() => {
    return filterRepositories(repos, repoType, language, searchTerm);
  }, [repos, repoType, language, searchTerm]);

  if (loadingRepos)
    return (
      <div className="mt-6">
        <Spinner />
      </div>
    );

  if (errorRepos)
    return (
      <div className="mt-6 text-center">Erro ao carregar Repositórios...</div>
    );

  return (
    <div className="mt-6 flex w-full max-w-md flex-col gap-4">
      {filteredRepos.length === 0 ? (
        <p className="text-center text-neutral-400">
          Nenhum repositório encontrado.
        </p>
      ) : (
        filteredRepos.map((repo) => <RepoItem key={repo.id} item={repo} />)
      )}
    </div>
  );
};

export default RepoList;
