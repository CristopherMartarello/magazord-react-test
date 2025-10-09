import { BranchFork, StarFilled } from "@/assets/icons";
import { useGithubStore } from "@/store/githubStore";
import type { GithubRepo } from "@/types/github";
import { useNavigate } from "react-router-dom";

interface RepoItemProps {
  item: GithubRepo;
}

const RepoItem = ({ item }: RepoItemProps) => {
  const { activeTab } = useGithubStore();
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col space-y-3 border-b border-b-neutral-100 bg-white pb-5 text-black"
      onClick={() => navigate(`/repo/${item.owner.login}/${item.name}`)}
    >
      <div className="flex items-center gap-1 text-lg">
        <span className="font-light">{item.full_name.split("/")[0]}</span>
        <span className="font-normal">/</span>
        <span className="text-primary-400 line-clamp-1 font-semibold">
          {item.name}
        </span>
      </div>
      <span className="text-sm font-normal text-neutral-400">
        {item.description}
      </span>
      <div className="flex items-center gap-10">
        {activeTab === "repositories" ? (
          <span className="flex items-center gap-2 text-sm font-normal">
            <StarFilled />
            {item.stargazers_count}
          </span>
        ) : (
          <span className="text-sm font-normal">{item.language ?? "N/A"}</span>
        )}

        <span className="flex items-center gap-2 text-sm font-normal">
          <BranchFork />
          {item.forks_count}
        </span>
      </div>
    </div>
  );
};

export default RepoItem;
