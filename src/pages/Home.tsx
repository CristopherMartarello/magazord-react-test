import RepoList from "@/components/RepoList";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-400">
      <Header />
      <div className="flex flex-col items-center justify-start p-7">
        <ProfileCard />
        <div className="mt-8 flex w-full">
          <Tabs />
        </div>
        <SearchBar />
        <RepoList />
      </div>
    </div>
  );
};

export default Home;
