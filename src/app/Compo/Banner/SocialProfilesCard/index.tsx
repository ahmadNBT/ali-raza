import Image from "next/image";
import Link from "next/link";
import React from "react";
import redirectImage from "@/../public/assets/icon.svg";
import pic from "@/../public/assets/my-works.png";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFiverr } from "react-icons/si";

const SocialProfileCard = () => {
  return (
    <div
      className="flex w-full lg:h-[230px] sm:h-[300px] flex-col justify-between group relative rounded-[30px] border-2 dark:border-[rgb(39,39,39)] shadow-md dark:bg-linear_BG bg-white p-5 py-8"
    >
      <Link
        href="/about"
        // className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5"
      >
        <Image
          className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5"
          src={redirectImage}
          alt=""
        />
      </Link>

      <div className="w-full h-full text-center">
        <div className="dark:bg-linear_BG bg-white w-fill p-4 px-5  shadow-md border dark:border-[rgb(39,39,39)] rounded-[30px] flex justify-center gap-3 items-center">
          <Link
            href={"https://www.fiverr.com/ahmadraza4571"}
            target="_blank"
            className="xl:w-[90px] w-[70px] xl:h-[90px] h-[70px] flex justify-center items-center dark:bg-linear_BG rounded-full bg-white w-fill p-3 border shadow-md dark:border-[rgb(39,39,39)]"
          >
            {/* <SiMongodb className="dark:text-white text-black text-4xl" /> */}
            <SiFiverr className="dark:text-white text-black text-4xl" />
          </Link>
          <Link
            href={"https://www.upwork.com/freelancers/ahmadr293"}
            target="_blank"
            className="xl:w-[90px] w-[70px] xl:h-[90px] h-[70px] flex justify-center items-center dark:bg-linear_BG rounded-full bg-white w-fill p-3 border shadow-md dark:border-[rgb(39,39,39)]"
          >
            <FaUpwork className="dark:text-white text-black text-4xl" />
          </Link>
        </div>
      </div>
      <div className="w-full p-2 leading-normal">
        <p className="text-xs text-textGray uppercase">STAY WITH ME</p>
        <Link href="/about" className="m-0 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Profiles
        </Link>
      </div>
    </div>
  );
};

export default SocialProfileCard;
