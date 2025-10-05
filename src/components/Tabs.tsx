import { BookmarkIcon, StarIcon } from "../assets/icons";
import { useGithubStore } from "../store/githubStore";
import TabItem from "./TabItem";

const Tabs = () => {
  const activeTab = useGithubStore((state) => state.activeTab);
  const setActiveTab = useGithubStore((state) => state.setActiveTab);

  return (
    <div className="flex w-full justify-between">
      <TabItem
        icon={<BookmarkIcon />}
        label={"Repositories"}
        count={12}
        onTabClick={() => setActiveTab("repositories")}
        isActive={activeTab === "repositories"}
      />
      <TabItem
        icon={<StarIcon />}
        label={"Starred"}
        count={5}
        onTabClick={() => setActiveTab("starred")}
        isActive={activeTab === "starred"}
      />
    </div>
  );
};

export default Tabs;
