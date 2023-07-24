"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import SeachWithFav from "./SeachWithFav";
import Cart from "../Cart";

const NavItem = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const TOP_OFFSET: number = 150;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <div
      className={`px-8 lg:px-[80px] h-[102px] duration-300 ease-in-out bg-background z-10 sticky top-0 ${
        showBackground ? "drop-shadow-xl" : ""
      }`}
    >
      <div className=" hidden h-full xl:flex items-center justify-between ">
        <p className=" font-semibold uppercase text-lg md:text-xl lg:text-2xl">
          Your Logo
        </p>
        <div className="flex items-center space-x-[36px]">
          {nav_Items?.map((item, index) => (
            <Link
              href={item.url}
              className="text-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition duration-200 ease-in-out relative"
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SeachWithFav />
        <Cart items={2} />
      </div>

      <div className=" h-full flex xl:hidden  items-center justify-between ">
        <p className=" font-semibold uppercase text-lg md:text-xl lg:text-2xl">
          Your Logo
        </p>
        <Icon
          icon="ion:menu"
          width={28}
          className=" cursor-pointer duration-700 ease-in"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
      </div>
      <div
        className={` ${
          navOpen ? "fixed" : "hidden"
        } w-full h-screen  bg-black/70 top-0 left-0 z-20`}
      >
        <div className=" w-full relative flex flex-col items-center gap-7 h-full bg-background ease-in duration-1000">
          <div
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            className=" cursor-pointer absolute top-4 right-5 text-white bg-primary p-2 rounded-full"
          >
            <Icon icon="maki:cross" />
          </div>
          <div className=" flex flex-col items-center mt-16 gap-5">
            {nav_Items?.map((item, index) => (
              <Link
                href={item.url}
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="text-[18px] cursor-pointer hover:text-primary hover:underline underline-offset-4 transition duration-200 ease-in-out relative"
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <SeachWithFav />
          <Cart items={2} />
        </div>
      </div>
    </div>
  );
};

export default NavItem;
