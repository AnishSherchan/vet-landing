import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

type ButtonProps = { title: string; type: string };

const PrimaryButton = ({ title, type }: ButtonProps) => {
  let buttonStyle: string;
  switch (type) {
    case "primary":
      buttonStyle = "text-white";
      break;
    case "secondary":
      buttonStyle = "";
      break;
    case "error":
      buttonStyle = "";
      break;
    default:
      buttonStyle = "";
  }
  return (
    <button
      className={`bg-primary flex items-center gap-9 rounded-full px-2 py-3 font-medium pl-5 ${buttonStyle}`}
    >
      {title}
      <div className=" bg-background rounded-full">
        <Icon
          icon="ic:baseline-chevron-right"
          width="30"
          className={`${
            type === "primary" ? "text-primary" : "text-background"
          }`}
        />
      </div>
    </button>
  );
};

export default PrimaryButton;
