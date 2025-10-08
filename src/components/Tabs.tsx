import { BookmarkIcon, StarIcon } from "../assets/icons";
import { useGithubStore } from "../store/githubStore";
import TabItem from "./TabItem";

const Tabs = () => {
  const { activeTab, setActiveTab, repoCount, starredCount } = useGithubStore();

  return (
    <div className="mobile-l:gap-10 flex w-full justify-between md:justify-normal md:gap-10 lg:gap-16">
      <TabItem
        icon={<BookmarkIcon />}
        label={"Repositories"}
        count={repoCount}
        onTabClick={() => setActiveTab("repositories")}
        isActive={activeTab === "repositories"}
      />
      <TabItem
        icon={<StarIcon />}
        label={"Starred"}
        count={starredCount}
        onTabClick={() => setActiveTab("starred")}
        isActive={activeTab === "starred"}
      />
    </div>
  );
};

export default Tabs;
