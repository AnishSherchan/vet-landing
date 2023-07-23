import React from "react";
import { Icon } from "@iconify/react";

const index = (): any => {
  return (
    <main
      className={` px-5  relative bg-[url(/Hero.svg)] h-[600px] w-full bg-no-repeat bg-bottom  bg-cover `}
    >
      <div className="pt-[45px] px-10  text-center ">
        <h2 className="font-black">
          We provide the best care to our furry friends!
        </h2>
        <h3>Top Quality of Pet Product Store.</h3>
      </div>
      <div className=" absolute text-[#007FFF] hover:text-white top-1/2 left-8 md:p-2 p-0.5 bg-[#EDEDED] transition duration-500 ease-in-out hover:bg-[#007FFF] cursor-pointer w-min rounded-full flex justify-center items-center">
        <Icon icon="ic:baseline-chevron-right" width="30" hFlip={true} />
      </div>
      <div className="absolute top-1/2 right-8 text-[#007FFF] hover:text-white md:p-2 p-0.5 bg-[#EDEDED]  transition duration-500 ease-in-out hover:bg-[#007FFF] cursor-pointer w-min rounded-full flex justify-center items-center">
        <Icon icon="ic:baseline-chevron-right" width="30" />
      </div>
    </main>
  );
};

export default index;
