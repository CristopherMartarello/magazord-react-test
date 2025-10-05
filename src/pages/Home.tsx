import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-neutral-50 p-7 text-neutral-400">
      <ProfileCard />
      <div className="mt-8 flex w-full">
        <Tabs />
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
