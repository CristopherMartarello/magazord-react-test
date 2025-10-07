import { ChevronDownIcon } from "@/assets/icons";
import type { GithubIssue } from "@/types/github";

interface IssueItemProps {
  issue: GithubIssue;
}

const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 space-y-1 border-b border-b-neutral-100 bg-white pb-5 text-black"
    >
      <div className="flex w-full flex-col">
        <h3 className="mt-2 line-clamp-2 text-base font-normal text-black">
          {issue.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-400">
          <img
            src={issue.user.avatar_url}
            alt={issue.user.login}
            className="h-5 w-5 rounded-full"
          />
          <span>{issue.user.login}</span>
        </div>
      </div>

      <ChevronDownIcon className="rotate-270 text-neutral-500" />
    </a>
  );
};

export default IssueItem;
