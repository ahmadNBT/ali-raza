import Image from "next/image";
import Link from "next/link";
import React from "react";
import redirectImage from "@/../public/assets/icon.svg";
import pic from "@/../public/assets/my-works.png";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Experience = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="600"
      className="flex w-full lg:h-[230px] sm:h-[300px] flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8"
    >
      <div className="grid grid-cols-3 gap-3 h-full">
        <div className="h-full flex flex-col justify-between items-center rounded-[30px] text-center shadow-md border-2 dark:text-white text-black dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <h1 className="text-3xl">04</h1>
          <p className="uppercase text-textGray sm:text-sm text-[0.6rem]">years Experience</p>
        </div>
        <div className="h-full flex flex-col justify-between items-center rounded-[30px] text-center shadow-md border-2 dark:text-white text-black dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <h1 className="text-3xl">55+</h1>
          <p className="uppercase text-textGray sm:text-sm text-[0.6rem]">CLIENTS WORLDWIDE</p>
        </div>
        <div className="h-full flex flex-col justify-between items-center rounded-[30px] text-center shadow-md border-2 dark:text-white text-black dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <h1 className="text-3xl">60+</h1>
          <p className="uppercase text-textGray sm:text-sm text-[0.6rem]">TOTAL PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
