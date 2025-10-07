import RepoList from "@/components/RepoList";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-400">
      <Header />
      <div className="flex flex-col items-center justify-start p-7 md:flex-row md:items-start md:gap-10">
        <div className="w-full md:w-1/3">
          <ProfileCard />
        </div>
        <div className="mt-8 flex w-full flex-col md:mt-10 md:w-2/3">
          <Tabs />
          <SearchBar />
          <RepoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
