import { ChevronDownIcon } from "@/assets/icons";
import { forwardRef } from "react";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick?: () => void;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ label, active, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="from-primary-500 to-primary-400 flex items-center rounded-full bg-gradient-to-r px-3 py-2 pr-5 text-sm font-normal text-white shadow-sm"
      >
        <ChevronDownIcon
          className={`mr-2 h-4 w-4 transform text-white transition-transform duration-200 ease-in-out ${active ? "rotate-180" : "rotate-0"} `}
        />
        <span className="text-sm lg:text-lg">{label}</span>
      </button>
    );
  }
);
