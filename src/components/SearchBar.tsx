import { useState } from "react";
import { useGithubStore } from "../store/githubStore";
import { FilterDrawer } from "./FilterDrawer";
import { SearchIcon, XIcon } from "../assets/icons";
import { FilterButton } from "./FilterButton";
import { REPO_TYPES, LANGUAGES } from "@/constants/githubFilters";
import { FilterDropdown } from "./FilterDropdown";

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
    <>
      {/* input e botões de filtro para mobile (até md), sobrepostos */}
      <div className="relative mt-4 w-full rounded-xl bg-neutral-100 px-3 py-3 md:hidden">
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
              <SearchIcon className="text-primary-400" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <SearchIcon className="text-primary-400" />
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
      </div>

      {/* input e botões de filtro para telas maiores, separados */}
      <div className="hidden w-full md:mt-4 md:flex md:flex-col md:gap-3 lg:flex lg:flex-row-reverse lg:gap-12">
        <div className="mt-4 flex items-center gap-2 lg:gap-4">
          <FilterDropdown
            label="Type"
            options={REPO_TYPES}
            selected={repoType}
            onSelect={setRepoType}
          />
          <FilterDropdown
            label="Language"
            options={LANGUAGES}
            selected={language}
            onSelect={setLanguage}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full items-center gap-2 md:border-b md:border-b-neutral-100 lg:border-b-neutral-200"
        >
          <SearchIcon className="text-neutral-400" />
          <input
            type="text"
            placeholder="Search Here"
            className="flex-1 rounded-md px-2 py-1 text-lg font-normal text-neutral-400 focus:outline-none"
            value={localTerm}
            onChange={(e) => setLocalTerm(e.target.value)}
          />
        </form>
      </div>

      {/* DRAWERS (apenas para mobile e tablet) */}
      <FilterDrawer
        title="Type"
        options={REPO_TYPES}
        selected={repoType}
        open={drawer === "type"}
        onSelect={setRepoType}
        onClose={() => setDrawer(null)}
      />

      <FilterDrawer
        title="Language"
        options={LANGUAGES}
        selected={language}
        open={drawer === "language"}
        onSelect={setLanguage}
        onClose={() => setDrawer(null)}
      />
    </>
  );
}
