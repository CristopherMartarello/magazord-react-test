interface AdditionalInfoLabelProps {
  icon: React.ReactNode;
  text: string;
  isLink?: boolean;
}

const AdditionalInfoLabel = ({
  icon,
  text,
  isLink,
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
          className="text-primary-400 truncate text-sm font-normal"
          href={text}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      )}
    </div>
  );
};

export default AdditionalInfoLabel;
