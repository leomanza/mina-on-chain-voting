import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

import { useAppStore } from "@/store/app.store";

export const SearchControl = () => {
  const searchActive = useAppStore((state) => state.searchActive);
  const setSearchState = useAppStore((state) => state.setSearchState);

  return (
    <button
      type="button"
      className="ml-4"
      onClick={() => {
        setSearchState(!searchActive);
      }}
    >
      <div className="group px-3 py-1.5 hover:bg-gray-4 transition-all duration-200 rounded-md">
        <SearchIcon className="w-[25px] h-[25px] text-gray-9 group-hover:text-gray-12 transition-all duration-200" />
      </div>
    </button>
  );
};