interface TabItemProps {
  label: string;
  icon: React.ReactNode;
  count: number;
  onTabClick: () => void;
  isActive: boolean;
}

const TabItem = ({
  label,
  icon,
  count,
  onTabClick,
  isActive,
}: TabItemProps) => {
  return (
    <div
      onClick={onTabClick}
      className={`flex items-center gap-2 pb-1 ${isActive ? "border-b-secondary-500 border-b-2 text-black" : "text-neutral-400"}`}
    >
      <span className="ml-2">{icon}</span>
      <span className="mr-2">{label}</span>
      <span className="border-neutral-150 min-w-10 rounded-full border bg-neutral-100 px-2 py-[2px] text-center text-sm font-normal text-neutral-400">
        {count}
      </span>
    </div>
  );
};

export default TabItem;
