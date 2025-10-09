import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <span className="flex items-center justify-center">
      <Loader2 className="text-primary-400 h-10 w-10 animate-spin" />
    </span>
  );
};

export default Spinner;
