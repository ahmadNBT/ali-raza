"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import FloatingElement from "./Compo/FloatingElement";
import ProfileCard from "./Compo/Banner/ProfileCard";
import Credentials from "./Compo/Banner/credentials";
// import { useRouter } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import ProjectsCard from "./Compo/Banner/projectsCard";
import BlogsCard from "./Compo/Banner/blogsCard";
import SkillsCard from "./Compo/Banner/skillsCard";
import SocialProfilesCard from "./Compo/Banner/SocialProfilesCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Compo/Banner/experiance";
import TalkTogether from "./Compo/Banner/TalkTogether";

const Home = () => {
  // const router = useRouter();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        once: true,
      });
    }, 10);
  }, []);

  return (
    <>
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-[3px]  dark:bg-white bg-black origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-full dark:bg-customGray py-20 ">
        <FloatingElement float={true} />
        <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto flex lg:flex-row flex-col justify-between items-start mt-5">
          <div className="lg:w-1/2 w-full">
            <ProfileCard />
          </div>
          <div className="lg:w-1/2 w-full ">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="1000"
              className="mb-5 markee dark:bg-linear_BG bg-white shadow-md border-2 dark:border-[rgb(39,39,39)] rounded-[30px] p-5 px-8"
            >
              <div className="overflow-hidden text-xs font-extralight text-gray-400">
                <p className="marqee_para text-nowrap tracking-wider">
                  LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>{" "}
                  &nbsp;*&nbsp; LATEST WORK AND{" "}
                  <span className="font-bold dark:text-white text-blac">
                    FEATURED
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 md:flex-row flex-col justify-center items-center w-full">
              <div className="md:w-1/2 w-full" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000">
                <Credentials />
              </div>
              <div className="md:w-1/2 w-full">
                <ProjectsCard />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="w-full">
            <BlogsCard />
          </div>
          <div className="w-full lg:col-span-2 grid-cols-1">
            <SkillsCard />
          </div>
          <div className="w-full " data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000">
            <SocialProfilesCard />
          </div>
        </div>

        <div className=" max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full">
            <Experience />
          </div>
          <div className="w-full">
            <TalkTogether />
          </div>
        </div>


        


      </div>
    </>
  );
};

export default Home;
