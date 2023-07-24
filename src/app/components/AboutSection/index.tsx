import React from "react";
import Image from "next/image";
import PrimaryButton from "../Button";
import { Icon } from "@iconify/react/dist/iconify.js";

function About(): any {
  return (
    <div className=" mt-[155px] px-10 xl:px-24" id="about">
      <div className=" flex gap-24 flex-col justify-center items-center xl:flex-row xl:items-start">
        <Image src="/About_Hero.svg" alt="About us" width={524} height={605} />
        <div className=" flex flex-col xl:mt-[84px] gap-10">
          <div>
            <h1>About Us</h1>
            <p className=" tracking-wider mt-4">
              Pet House & Animal clinic was established with moto to provide
              qualitative and affordable animal healthcare service to your
              doorstep.
            </p>
          </div>
          <div className=" flex flex-col gap-4 font-semibold">
            <p className=" text-[18px] flex  items-center gap-3">
              <Icon icon="ei:check" className="text-primary" width={26} />
              Comprehensive
            </p>
            <p className=" text-[18px] flex  items-center gap-3">
              <Icon icon="ei:check" className="text-primary" width={26} />
              Professional
            </p>
            <p className=" text-[18px] flex  items-center gap-3">
              <Icon icon="ei:check" className="text-primary" width={26} />
              Compassionate veterinary service.
            </p>
          </div>
          <div>
            <PrimaryButton title="Contact" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
