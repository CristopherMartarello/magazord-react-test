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
    <div className="flex w-full items-center gap-2">
      {icon}
      {!isLink ? (
        <span className="text-primary-400 text-sm font-normal">{text}</span>
      ) : (
        <a
          className="text-primary-400 text-sm font-normal"
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
