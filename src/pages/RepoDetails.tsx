import IssueItem from "@/components/IssueItem";
import RepoStatItem from "@/components/RepoStatItem";
import { useGithubRepoIssues } from "@/hooks/useGithub/useGithubRepoIssues";
import { useGithubRepository } from "@/hooks/useGithub/useGithubRepository";
import { ChevronDown } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const RepoDetails = () => {
  const { owner, name } = useParams<{ owner: string; name: string }>();
  const navigate = useNavigate();
  const {
    data: repo,
    isLoading: isRepoLoading,
    error: isRepoError,
  } = useGithubRepository(owner, name);
  const {
    data: issues,
    isLoading: isIssuesLoading,
    error: isIssuesError,
  } = useGithubRepoIssues(owner, name);

  if (isRepoLoading) return <div>Carregando Repositório...</div>;
  if (isRepoError) return <div>Falha ao carregar Repositório...</div>;
  if (!repo) return <div>Nenhum repositório encontrado.</div>;

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 p-7 text-neutral-400">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex w-fit items-center gap-2"
      >
        <ChevronDown className="rotate-90" />
        Voltar
      </button>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={repo.owner?.avatar_url}
          alt={`${repo.owner?.login}'s photo.`}
          className="h-[104px] w-[104px] rounded-full"
        />
        <div className="flex flex-col overflow-hidden sm:max-w-[80vw]">
          <span className="text-base font-light text-black">
            {repo.owner.login} /{" "}
          </span>
          <div className="flex items-center gap-1 text-3xl">
            <span className="text-primary-400 truncate font-semibold">
              {repo.name}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col text-sm font-light text-neutral-400">
        <span>{repo.description ?? "Descrição não informada."}</span>
        <span className="mt-2 w-fit rounded-xl bg-neutral-100 px-2 py-1 text-neutral-400">
          {repo.language ?? "Linguagem N/A"}
        </span>
      </div>
      <div className="mt-4 flex gap-14 border-b border-b-neutral-100 pb-3">
        <RepoStatItem value={repo.stargazers_count} label={"Stars"} />
        <RepoStatItem value={repo.forks_count} label={"Forks"} />
        <RepoStatItem value={repo.open_issues} label={"Issues abertas"} />
      </div>
      <div className="mt-4">
        {isIssuesError ? (
          <span className="text-error text-sm">
            Falha ao carregar Issues. Tente novamente mais tarde.
          </span>
        ) : isIssuesLoading ? (
          <span className="text-sm text-neutral-500">Carregando Issues...</span>
        ) : issues && issues.length > 0 ? (
          <div className="flex flex-col gap-3">
            {issues.map((issue) => (
              <IssueItem key={issue.id} issue={issue} />
            ))}
          </div>
        ) : (
          <span className="text-sm text-neutral-500">
            Nenhuma Issue aberta nesse momento...
          </span>
        )}
      </div>
    </div>
  );
};

export default RepoDetails;
