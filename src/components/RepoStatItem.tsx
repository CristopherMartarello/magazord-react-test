interface RepoStatItemProps {
  value: number | string;
  label: string;
}

const RepoStatItem = ({ value, label }: RepoStatItemProps) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-3xl font-semibold text-black">{value}</span>
      <span className="text-sm text-neutral-500">{label}</span>
    </div>
  );
};

export default RepoStatItem;
