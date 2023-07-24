import React from "react";
import GoldernRetriver from "../../../../public/GoldenRetriver.svg";
import Dobermam from "../../../../public/Doberman.png";
import Aspo from "../../../../public/Aspo.png";
import Japanese from "../../../../public/Japanses.png";
import German from "../../../../public/German.png";
import Husky from "../../../../public/Husky.png";
import Pug from "../../../../public/Pug.png";
import Unknown from "../../../../public/unDog.png";
import Image from "next/image";
import PrimaryButton from "../Button";
const Breed = (): any => {
  const breeds: { name: string; gender: string; age: string; img: any }[] = [
    {
      name: "Golden Retriver",
      gender: "Male",
      age: "2 months",
      img: GoldernRetriver,
    },
    {
      name: "Doberman",
      gender: "Male",
      img: Dobermam,
      age: "2 months",
    },
    {
      name: "Apso",
      img: Aspo,
      gender: "Male",
      age: "2 months",
    },
    {
      img: Unknown,
      name: "Chihuahua",
      gender: "Female",
      age: "1 Year",
    },
    {
      name: "German Shepard",
      img: German,
      gender: "Male",
      age: "2 months",
    },
    {
      name: "Husky",
      img: Husky,
      gender: "Female",
      age: "3 months",
    },
    {
      name: "Pug",
      img: Pug,
      gender: "Male",
      age: "4 months",
    },
    {
      name: "Japanese Spitz",
      img: Japanese,
      gender: "Male",
      age: "4 months",
    },
  ];
  return (
    <div id="breeds">
      <h1 className="text-center">Our Pet Collections</h1>
      <p className=" text-center">
        {` "Bring joy to your home with a furry companion from our pet selection."`}
      </p>
      <div className=" mt-14 mx-auto max-w-screen-2xl flex flex-row flex-wrap justify-center gap-20">
        {breeds?.map((breed, index) => (
          <div
            key={index}
            className=" border border-gray-300 rounded-2xl p-1 pb-4"
          >
            <Image
              src={breed.img}
              className=" rounded-xl"
              alt="test"
              width={264}
              height={264}
            />
            <div className=" px-3 mt-3">
              <p className=" text-[16px] font-extrabold text-secondary">
                {breed.name}
              </p>
              <div className="flex gap-6 ">
                <p className=" text-[14px]">
                  Gender: <span className=" font-bold">{breed.gender}</span>
                </p>
                <p className=" text-[14px]">
                  Gender: <span className=" font-bold">{breed.age}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <PrimaryButton title="View All" type="primary" />
      </div>{" "}
    </div>
  );
};

export default Breed;
