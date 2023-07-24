import React from "react";
import Banners from "../../../../public/Banner.svg";
import Image from "next/image";
import PrimaryButton from "../Button";

const Banner = (): any => {
  return (
    <div className="hidden md:block px-3">
      <div className="flex relative justify-center">
        <Image src={Banners} alt="Banner" className="w-full"></Image>
        <div className=" absolute top-1/4 left-14">
          <div className=" flex flex-col md:gap-3 xl:gap-5">
            <p className="  text-[20px] font-semibold text-background">
              One More Friend Thousands More Fun!
            </p>
            <p className=" text-[32px] text-white font-black">{`"Find your furry soulmate at Our Pet Shop."`}</p>
            <div className=" xl:mt-7">
              <PrimaryButton title="Get Now" type="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
