import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-indigo-900 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-white flex items-center">
          ARGENTINA <ChevronDownIcon className="h-4 w-4 ml-1" />
        </div>
        <div className="text-white">Corporate</div>
      </div>
    </header>
  );
}
