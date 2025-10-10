import { extractUsernameFromUrl } from "@/utils/extractUsernameFromUrl";

interface AdditionalInfoLabelProps {
  icon: React.ReactNode;
  text: string;
  isLink?: boolean;
  showFullUrl?: boolean;
}

const AdditionalInfoLabel = ({
  icon,
  text,
  isLink,
  showFullUrl,
}: AdditionalInfoLabelProps) => {
  return (
    <div className="flex w-full items-center gap-2 md:gap-3">
      <span className="shrink-1">{icon}</span>
      {!isLink ? (
        <span className="text-primary-400 truncate text-sm font-normal">
          {text}
        </span>
      ) : (
        <a
          className="text-primary-400 hover:text-primary-600 truncate text-sm font-normal no-underline hover:underline"
          href={text}
          target="_blank"
          rel="noopener noreferrer"
        >
          {showFullUrl ? text : extractUsernameFromUrl(text)}
        </a>
      )}
    </div>
  );
};

export default AdditionalInfoLabel;
