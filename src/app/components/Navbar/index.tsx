import React from "react";
import NavItem from "./navItem";

const Navbar: React.FC = (): any => {
  return (
    <>
      <div className="h-[53px] bg-primary">
        <div className="flex flex-col items-center text-center h-full justify-center">
          <p className=" text-background">
            Call us for Veterinary Support:{" "}
            <a className=" cursor-pointer" href="tel:+977-9861859764">
              +977-9861859764
            </a>
          </p>
        </div>
      </div>
      <NavItem />
    </>
  );
};

export default Navbar;
