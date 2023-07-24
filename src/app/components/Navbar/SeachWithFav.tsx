import React from "react";
import { Icon } from "@iconify/react";

const SeachWithFav = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="flex items-center border justify-around border-primary rounded-full px-4 py-2">
        <input
          type="text"
          className="flex-1 border-none focus:ring-0 focus:outline-none bg-background text-base"
          placeholder="Search..."
        />
        <div className="bg-primary p-1 flex items-center mr-[-10px] justify-center rounded-full">
          <Icon icon="material-symbols:search" color="white" height={23} />
        </div>
      </div>
      <Icon
        icon="ic:outline-favorite"
        width={22}
        className=" text-primary cursor-pointer"
      />
    </div>
  );
};

export default SeachWithFav;
