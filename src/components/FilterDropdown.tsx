import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { FilterButton } from "./FilterButton";
import FilterCheckboxItem from "./FilterCheckboxItem";

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onSelect: (value: string[]) => void;
}

export const FilterDropdown = ({
  label,
  options,
  selected,
  onSelect,
}: FilterDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleToggleOption = (option: string) => {
    const isSelected = selected.includes(option);
    const optionUpdated = isSelected
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onSelect(optionUpdated);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* o PopoverTrigger já passa a ref automaticamente para o FilterButton que aceita a ref e aplica */}
      <PopoverTrigger asChild>
        <FilterButton label={label} active={open} />
      </PopoverTrigger>

      <PopoverContent
        className="from-primary-500-soft to-primary-400-soft w-64 rounded-xl border border-neutral-200 bg-gradient-to-r p-3 shadow-sm"
        align="start"
      >
        <div className="flex flex-col gap-3">
          {options.map((option) => {
            const isChecked = selected.includes(option);
            return (
              <FilterCheckboxItem
                key={option}
                label={option}
                isChecked={isChecked}
                onToggle={() => handleToggleOption(option)}
              />
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
