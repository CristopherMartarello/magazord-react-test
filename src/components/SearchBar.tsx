import { useState } from "react";
import { useGithubStore } from "../store/githubStore";
import { FilterDrawer } from "./FilterDrawer";
import { SearchIcon, XIcon } from "../assets/icons";
import { FilterButton } from "./FilterButton";
import { REPO_TYPES, LANGUAGES } from "@/constants/githubFilters";

export default function SearchBar() {
  const {
    repoType,
    language,
    searchTerm,
    setRepoType,
    setLanguage,
    setSearchTerm,
  } = useGithubStore();
  const [drawer, setDrawer] = useState<"type" | "language" | null>(null);
  const [searchActive, setSearchActive] = useState(false);
  const [localTerm, setLocalTerm] = useState(searchTerm);

  const handleToggleSearch = () => {
    if (searchActive) {
      setLocalTerm("");
      setSearchTerm("");
    }
    setSearchActive(!searchActive);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localTerm.trim());
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
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <SearchIcon />
          <input
            type="text"
            placeholder="Type something here..."
            className="flex-1 rounded-md px-2 py-1 text-sm text-neutral-400 focus:outline-none"
            value={localTerm}
            onChange={(e) => setLocalTerm(e.target.value)}
          />
          <button
            type="button"
            onClick={handleToggleSearch}
            className="flex h-8 w-8 items-center justify-center rounded-full"
          >
            <XIcon className="text-neutral-400" />
          </button>
        </form>
      )}

      <FilterDrawer
        title="Type"
        options={REPO_TYPES}
        selected={repoType}
        open={drawer === "type"}
        onSelect={(value) => {
          setRepoType(value);
        }}
        onClose={() => setDrawer(null)}
      />

      <FilterDrawer
        title="Language"
        options={LANGUAGES}
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
