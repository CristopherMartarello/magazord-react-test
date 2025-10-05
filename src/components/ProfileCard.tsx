import { useState } from "react";
import {
  ChainIcon,
  ChevronDownIcon,
  EnterpriseIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
} from "../assets/icons";
import { useGithubSocials } from "../hooks/useGithub/useGithubSocials";
import { useGithubUser } from "../hooks/useGithub/useGithubUser";
import AditionalInfoLabel from "./AdditionalInfoLabel";

const ProfileCard = () => {
  const { data: user, isLoading: loadingUser } = useGithubUser();
  const { data: socials, isLoading: loadingSocials } = useGithubSocials();
  const [collapse, setCollapse] = useState(false);

  const handleAdditionalClickInfo = () => {
    setCollapse(!collapse);
  };

  const getSocialIcon = (provider: string) => {
    switch (provider) {
      case "instagram":
        return <InstagramIcon className="text-primary-400 h-4 w-4" />;
      case "linkedin":
        return <LinkedinIcon className="text-primary-400 h-4 w-4" />;
      default:
        return null;
    }
  };

  if (loadingUser || loadingSocials)
    return <div>Carregando informações...</div>;

  return (
    <div className="mt-8 flex max-w-[217px] flex-col items-center justify-center gap-1">
      <div className="relative">
        <img
          src={user?.avatar_url}
          alt={`${user?.name}'s photo.`}
          className="h-[104px] w-[104px] rounded-full"
        />
        <div className="absolute right-0 bottom-0 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-50 p-4 text-sm shadow">
          😎
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <h1 className="text-xl font-bold text-black">{user?.name}</h1>
        <p className="mt-1 text-sm font-normal break-words text-neutral-500 sm:text-[12px] md:text-base">
          {user?.bio}
        </p>
      </div>
      <div className="text-primary-400 flex flex-col items-center">
        <span className="mt-4">Informações Adicionais</span>
        <ChevronDownIcon
          className={`mb-2 h-6 w-6 transform transition-transform duration-200 ease-in-out ${collapse ? "rotate-180" : "rotate-0"}`}
          onClick={() => handleAdditionalClickInfo()}
        />
        {collapse && (
          <div className="flex min-h-[143px] min-w-[380px] flex-col gap-4 rounded-2xl bg-neutral-100 p-4">
            <AditionalInfoLabel
              icon={<EnterpriseIcon />}
              text={user?.company ?? "Empresa não informada."}
            />
            <AditionalInfoLabel
              icon={<LocationIcon />}
              text={user?.location ?? "Localização não informada."}
            />
            <AditionalInfoLabel
              icon={<ChainIcon />}
              text={user?.blog ?? "Link não informado."}
              isLink={true}
            />
            {socials && socials.length > 0 && (
              <>
                {socials.map((social) => (
                  <AditionalInfoLabel
                    key={social.provider}
                    icon={getSocialIcon(social.provider)}
                    text={social.url}
                    isLink={true}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
