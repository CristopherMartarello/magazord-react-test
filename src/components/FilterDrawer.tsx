import { XIcon } from "@/assets/icons";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import FilterCheckboxItem from "./FilterCheckboxItem";

interface FilterDrawerProps {
  title: string;
  options: string[];
  selected: string[];
  open: boolean;
  onSelect: (value: string[]) => void;
  onClose: () => void;
}

export function FilterDrawer({
  title,
  options,
  selected,
  open,
  onSelect,
  onClose,
}: FilterDrawerProps) {
  const handleToggleOption = (option: string) => {
    const isSelected = selected.includes(option);
    const optionUpdated = isSelected
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onSelect(optionUpdated);
  };

  return (
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DrawerContent className="min-h-[80vh] bg-white shadow-lg transition-all duration-300">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="flex w-full justify-between text-lg">
            <span className="text-2xl font-bold text-black">{title}</span>
            <button onClick={onClose}>
              <XIcon className="text-error" />
            </button>
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-3 overflow-y-auto px-8 py-6">
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
      </DrawerContent>
    </Drawer>
  );
}
