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
      className="hover:shadow-repo-item-hover flex items-center justify-between gap-4 space-y-1 border-b border-b-neutral-100 bg-white py-5 text-black transition-all duration-300 ease-out hover:cursor-pointer hover:pl-8 hover:shadow-md lg:border-none"
    >
      <div className="flex w-full flex-col">
        <h3 className="line-clamp-2 text-base font-normal text-black">
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

      <span className="md:p-4">
        <ChevronDownIcon className="rotate-270 text-neutral-500" />
      </span>
    </a>
  );
};

export default IssueItem;
