import GithubLogo from "../assets/github-logo.png";

const Header = () => {
  return (
    <header className="bg-header hidden h-[72px] w-full items-center px-7 md:flex">
      <div className="flex w-full items-center gap-5 text-white">
        <img src={GithubLogo} alt="GitHub logo" className="h-[30px] w-auto" />
        <span className="text-2xl font-normal">/</span>
        <span className="text-base font-light">Profile</span>
      </div>
    </header>
  );
};

export default Header;
