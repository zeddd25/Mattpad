import React from "react";
import { BiSearch } from "react-icons/bi";

const InputSearch = () => {
  return (
    <div className="flex items-center h-[35px] w-[251px] rounded-full pl-2 bg-white mr-4">
      <BiSearch className="text-[30px]" />
      <input
        type="text"
        placeholder="Search for stories"
        className="outline-none text-lg rounded-full p-1 h-[35px] w-full"
      />
    </div>
  );
};

export default InputSearch;
