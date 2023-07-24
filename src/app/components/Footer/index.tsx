import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Gallery1 from "../../../../public/Gallery1.svg";
import Gallery2 from "../../../../public/Gallery2.svg";
import Gallery3 from "../../../../public/Gallery3.png";
import Gallery4 from "../../../../public/Gallery4.png";

const Footer = () => {
  const nav_Items: { title: string; url: string }[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/#about",
    },
    {
      title: "Services",
      url: "/#services",
    },
    {
      title: "Breeds",
      url: "/#breeds",
    },
    {
      title: "Shop",
      url: "/#shop",
    },
    {
      title: "Gallery",
      url: "/#gallery",
    },
  ];
  return (
    <div className="px-12  bg-secondary">
      <div className=" flex flex-wrap flex-col justify-around w-full gap-9 items-center md:flex-row mt-[80px] ">
        <div className=" flex flex-col gap-14">
          <p className=" font-semibold uppercase text-lg md:text-xl text-background text-center lg:text-2xl">
            Your Logo
            <br></br>
            Here
          </p>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-background text-[18px]">Phone Number</p>
              <a
                className=" cursor-pointer text-[20px] text-background font-bold"
                href="tel:+977-9861859764"
              >
                +977-9861859764
              </a>
            </div>
            <div>
              <p className="text-background text-[18px]">Location</p>
              <p className="text-background text-[20px] font-bold">
                Tahachal-Kathmandu
              </p>
            </div>
          </div>
        </div>
        <div className="w-[348px] hidden md:block text-justify">
          <p className=" text-[18px] text-background">
            {` "City Pet House & Animal Clinic: Quality and affordable animal care at
        your doorstep. Comprehensive, professional, and compassionate veterinary
        services by our dedicated and experienced team."`}
          </p>
        </div>
        <div>
          <p className="text-background">Menu</p>
          <div className=" flex flex-col gap-2 mt-8">
            {nav_Items?.map((item, index) => (
              <Link
                href={item.url}
                className="text-[18px] cursor-pointer text-background hover:text-primary hover:underline underline-offset-4 transition duration-200 ease-in-out relative"
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-background">Gallery</p>
          <div className=" w-[260px] flex flex-wrap gap-2 mt-5">
            <Image src={Gallery1} alt="gallery" width={120} />
            <Image src={Gallery2} alt="gallery" width={120} />
            <Image src={Gallery3} alt="gallery" width={120} />
            <Image src={Gallery4} alt="gallery" width={120} />
          </div>
        </div>
      </div>
      <div className="lg:ml-[140px] my-10">
        <hr className=" hidden lg:block border-t bg-white"></hr>
        <div className="flex flex-col items-center mt-6 lg:justify-between gap-5 lg:flex-row">
          <p className=" text-background text-[18px] text-center  ">
            Copyright © 2023 City Pet House & Animal Clinic | All Rights
            Reserved
          </p>
          <div className=" flex gap-2 lg:mr-14">
            <Icon
              icon="ri:facebook-fill"
              height={28}
              className=" text-secondary bg-background p-1 rounded-md"
            />
            <Icon
              icon="mdi:twitter"
              height={28}
              className=" text-secondary bg-background p-1 rounded-md"
            />
            <Icon
              icon="ri:instagram-fill"
              height={28}
              className=" text-secondary bg-background p-1 rounded-md"
            />
            <Icon
              icon="mdi:linkedin"
              height={28}
              className=" text-secondary bg-background p-1 rounded-md"
            />
            <Icon
              icon="mdi:youtube"
              height={28}
              className=" text-secondary bg-background p-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
