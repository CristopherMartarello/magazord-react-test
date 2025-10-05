import { useState } from "react";
import { useGithubStore } from "../store/githubStore";
import { FilterDrawer } from "./FilterDrawer";
import { SearchIcon, XIcon } from "../assets/icons";
import { FilterButton } from "./FilterButton";

const repoTypes = ["All", "Sources", "Forks", "Archived", "Mirrors"];
const languages = ["All", "Java", "TypeScript", "HTML", "CSS"];

export default function SearchBar() {
  const { repoType, language, setRepoType, setLanguage } = useGithubStore();
  const [drawer, setDrawer] = useState<"type" | "language" | null>(null);
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleSearch = () => {
    if (searchActive) setSearchTerm("");
    setSearchActive(!searchActive);
  };

  return (
    <div className="relative mt-4 w-full rounded-xl bg-neutral-100 px-3 py-3">
      {!searchActive ? (
        <div className="flex items-center gap-2">
          <FilterButton
            label="Type"
            active={drawer === "type"}
            onClick={() => setDrawer("type")}
          />

          <FilterButton
            label="Language"
            active={drawer === "language"}
            onClick={() => setDrawer("language")}
          />

          <button
            onClick={handleToggleSearch}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full"
          >
            <SearchIcon />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <SearchIcon />
          <input
            type="text"
            placeholder="Type something here..."
            className="flex-1 rounded-md px-2 py-1 text-sm text-neutral-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleToggleSearch}
            className="flex h-8 w-8 items-center justify-center rounded-full"
          >
            <XIcon className="text-neutral-400" />
          </button>
        </div>
      )}

      <FilterDrawer
        title="Type"
        options={repoTypes}
        selected={repoType}
        open={drawer === "type"}
        onSelect={(value) => {
          setRepoType(value);
        }}
        onClose={() => setDrawer(null)}
      />

      <FilterDrawer
        title="Language"
        options={languages}
        selected={language}
        open={drawer === "language"}
        onSelect={(value) => {
          setLanguage(value);
        }}
        onClose={() => setDrawer(null)}
      />
    </div>
  );
}
