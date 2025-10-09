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
      className={`flex w-full items-center gap-3 pb-2 lg:w-fit ${isActive ? "border-b-secondary-500 border-b-2 text-black" : "text-neutral-400"}`}
    >
      <span className="ml-2">{icon}</span>
      <span className="mr-2 text-base font-normal lg:text-lg">{label}</span>
      <span className="border-neutral-150 rounded-full border bg-neutral-100 px-3 py-1 text-center text-sm font-normal text-neutral-400 md:px-4">
        {count}
      </span>
    </div>
  );
};

export default TabItem;
