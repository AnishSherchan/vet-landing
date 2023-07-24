import React from "react";
import Image from "next/image";
import Dog1 from "../../../../public/Dog1.svg";
import Treat from "../../../../public/Treatment.png";
import Clinical from "../../../../public/Clinical.png";
import Bug from "../../../../public/Bug.png";
import Traning from "../../../../public/Traning.png";
import Mate from "../../../../public/Mate.png";

const Services = (): any => {
  const services: { title: string; desc: string; img: string }[] = [
    {
      title: "Dog/Cat Grooming",
      desc: "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
      img: Dog1,
    },
    {
      title: "Home Treatment",
      desc: "Our goal is to ensure pet welfare through home treatment and prompt client response.",
      img: Treat,
    },
    {
      title: "Clinical Treatment",
      desc: "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
      img: Clinical,
    },
    {
      title: "Puppies Buying & Selling",
      desc: "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
      img: Bug,
    },
    {
      title: "Dog Training",
      desc: "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
      img: Traning,
    },
    {
      title: "Dog Matting",
      desc: "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
      img: Mate,
    },
  ];
  return (
    <div className="mt-20 px-10 xl:px-24 " id="services">
      <div className="gap-3 flex flex-col items-center">
        <h1>Our Services</h1>
        <p className=" text-center ">
          We provide a wide range of products & services for pets such as food,
          toys, grooming supplies, and veterinary care. We aim to meet the needs
          of pet owners and ensure the health and happiness of their furry
          friends.
        </p>
      </div>
      <div className="mt-14 mx-auto max-w-screen-2xl flex flex-row flex-wrap justify-center gap-20">
        {services &&
          services.map((service, index) => (
            <div
              key={index}
              className=" border w-[335px] cursor-pointer border-gray-300 rounded-2xl"
            >
              <Image
                src={service.img}
                alt="services"
                width={335}
                height={189}
              />
              <div className=" px-5 pt-3 flex flex-col gap-3 pb-4">
                <p className=" text-secondary text-[20px] font-extrabold">
                  {service.title}
                </p>
                <p className=" text-[14px]">{service.desc}</p>
                <div className="flex justify-center mt-4">
                  <button className=" rounded-lg bg-secondary px-3 text-white hover:bg-primary/70 duration-200 ease-in-out py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
