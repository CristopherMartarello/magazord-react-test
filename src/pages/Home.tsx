import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-400">
      <div className="flex justify-center p-4 sm:p-6 md:p-8">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Home;
