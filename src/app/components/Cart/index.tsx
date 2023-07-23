import React from "react";
import { Icon } from "@iconify/react";
type CartProps = { items: number };
const index = ({ items }: CartProps) => {
  return (
    <div className="cursor-pointer flex items-center gap-2 border border-primary rounded-lg  px-3 py-2">
      <Icon icon="mdi:cart" className=" text-primary" width={19} />
      <p>{items} item</p>
    </div>
  );
};

export default index;
