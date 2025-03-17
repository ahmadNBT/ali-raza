import Image from "next/image";
import React, { useEffect } from "react";
import pic from "@/../public/assets/aboutCard2.png";
import Link from "next/link";
import redirectImage from '@/../public/assets/icon.svg'


const ProfileCard = () => {

  return (
    <Link
      href="/about"
      data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000"
      className="flex w-full relative group flex-col items-center rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] sm:flex-row lg:max-w-xl dark:bg-linear_BG bg-white p-10"
    >
        <Image className="object-cover w-[40px] group-hover:opacity-100 hover: dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5" src={redirectImage} alt="" />

      <div className="w-[230px] h-full rounded-br-[30px] rounded-tl-[30px] overflow-hidden">
        <Image className="object-cover w-full" src={pic} alt="" />
      </div>
      <div className="flex w-full sm:w-[50%] flex-col justify-between p-4 leading-normal">
        <p className="text-xs text-textGray uppercase">MERN Stack DEVELOPER</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Ali Raza Anwar
        </h5>
        <p className="mb-3 font-normal text-sm text-textGray">
          I am a Web Developer based in Lahore Pakistan.
        </p>
      </div>
    </Link>
  );
};

export default ProfileCard;
