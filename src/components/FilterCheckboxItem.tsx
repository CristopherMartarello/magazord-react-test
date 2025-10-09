interface FilterCheckboxItem {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

const FilterCheckboxItem = ({
  label,
  isChecked,
  onToggle,
}: FilterCheckboxItem) => {
  return (
    <div
      className={`flex w-full items-center gap-3 p-2 text-base ${isChecked ? "bg-primary-400-soft-strong" : "bg-transparent"}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className={`accent-primary-400 h-5 w-5 cursor-pointer`}
      />
      <span className={`${isChecked ? "text-primary-400" : "text-black"}`}>
        {label}
      </span>
    </div>
  );
};

export default FilterCheckboxItem;
