'use client'

import React, { useEffect } from "react";
import FloatingElement from "../Compo/FloatingElement";
import BlogsCard from "../Compo/Banner/blogsCard";
import SkillsCard from "../Compo/Banner/skillsCard";
import SocialProfilesCard from "../Compo/Banner/SocialProfilesCard";
import Image from "next/image";
import pic from "@/../public/assets/aboutCard2.png";
import starImage from "@/../public/assets/star-2.png";
import redirectImage from "@/../public/assets/icon.svg";
import hangPic from "@/../public/assets/icon2.png";
import ProfileCard from "../Compo/Banner/ProfileCard";
import Credentials from "../Compo/Banner/credentials";
import TalkTogether from "../Compo/Banner/TalkTogether";
import SocialProfileCard from "../Compo/Banner/SocialProfilesCard";
import AOS from "aos";


const About = () => {

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 10);
    // return () => {
    //   AOS.refresh();
    // };
  }, []);

  return (
    <div className="w-full dark:bg-customGray py-24">
      <FloatingElement float={true} />

      <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <div className="linearImage flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] bg-white overflow-hidden">
            <Image src={pic} alt="" />
          </div>
        </div>
        <div className="w-full lg:col-span-2 grid-cols-1">
          <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="flex justify-center gap-5 items-center mb-3">
            <Image className="w-14" src={starImage} alt="" />
            <h1 className="lg:text-6xl sm:text-3xl text-xl font-bold dark:text-white text-black">
              SELF-SUMMARY
            </h1>
            <Image className="w-14" src={starImage} alt="" />
          </div>

          <div
            data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000"
            className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-10"
          >
            <Image
              className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5"
              src={redirectImage}
              alt=""
            />
            <Image
              className="object-cover w-[40px] dark:invert-[0] dark:brightness-100 brightness-0 duration-300 absolute top-0 left-10"
              src={hangPic}
              alt=""
            />

            <h5 className="m-0 mt-20 text-2xl font-light tracking-tight text-gray-900 dark:text-white">
              Ali Raza Anwar
            </h5>
            <p className="text-gray-400 text-sm font-[100] w-[90%] mt-3">
              <b className="text-white text-md">ٱلسَّلَامُ عَلَيْكُمْ</b> ✋ I&apos;m a Senior Mern stack developer with 4 years
              of experience in Mern development. I prefer to create responsive,
              interactive layouts with clean and perfectly structured code. I am
              a very detail-oriented developer in my work.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <h5 className="m-0 mb-2 text-md font-light tracking-tight text-gray-900 dark:text-white">
            EXPERIENCE
          </h5>



          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-4 mb-2">
            2024 - Continue
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            NextJs Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Fast Technologies
          </p>

          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-4 mb-2">
            2023 - 2025
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            Mern Stack Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            LetSkill
          </p>


          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-4 mb-2">
            2022 - 2023
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            Mern Stack Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Noble Bridge Technologies
          </p>


          
        </div>
        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8">
          <h5 className="m-0 mb-2 text-md font-light tracking-tight text-gray-900 dark:text-white">
            EDUCATION
          </h5>


          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-4 mb-2">
            2020 - 2024
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            BSIT (BS in Information Technology)
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Punjab University of Pakistan
          </p>

        </div>
      </div>


      <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="w-full" data-aos="zoom-in" data-aos-duration="600">
            <SocialProfileCard />
          </div>
          <div className="w-full lg:col-span-2 grid-cols-1">
            <TalkTogether />
          </div>
          <div className="w-full" data-aos="zoom-in" data-aos-duration="600">
            <Credentials />
          </div>
        </div>


    </div>
  );
};

export default About;
