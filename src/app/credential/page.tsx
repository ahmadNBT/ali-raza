import React from "react";
import FloatingElement from "../Compo/FloatingElement";
import Image from "next/image";
import profile from "@/../public/assets/aboutCard2.png";
import Link from "next/link";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { FaAws } from "react-icons/fa";

// import Link from "next/link";

const Credential = () => {
  return (
    <div className="w-full dark:bg-customGray py-24">
      <FloatingElement float={true} />

      <div className="w-full max-w-[1200px] m-auto flex md:flex-row flex-col">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="1000"
          className="p-5 mx-auto sm:w-[400px] md:w-[400px]"
        >
          <div className="sticky top-5 flex flex-col justify-center items-center rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5">
            <div className="linearImage flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] bg-white overflow-hidden">
              <Image src={profile} alt="" />
            </div>
            <h1 className="text-2xl mt-10">Ali Raza</h1>
            <p className="text-textGray text-sm mt-3">Mern Stack Developer</p>
            <div className="flex gap-3 items-center mt-10">
              <Link
                href={"https://www.fiverr.com/ahmadraza4571"}
                className="rounded-full p-4 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <SiFiverr className="text-xl" />
              </Link>
              <Link
                href={"https://www.upwork.com/freelancers/ahmadr293"}
                className="rounded-full p-4 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <FaUpwork className="text-xl" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ali-raza-mernstackdeveloper"}
                className="rounded-full p-4 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ahmad-raza-01a49a239/"}
                className="rounded-full p-4 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <FaGithub className="text-xl" />
              </Link>
            </div>
            <Link
              href={"/contact"}
              className="text-center mt-3 rounded-[10px] text-textGray dark:hover:text-black p-3 px-5 w-full shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-[rgb(45,45,45)] dark:hover:bg-white duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="1000"
          className="p-5 lg:pl-10 flex-1"
        >
          <h1 className="uppercase text-xl ">About Me</h1>
          <p className="mt-5 text-textGray">
            <b className="dark:text-white text-sm">ٱلسَّلَامُ عَلَيْكُمْ</b> ✋
            I&apos;m a Senior Mern stack developer with 4 years of
            experience in Mern development. I prefer to create responsive,
            interactive layouts with clean and perfectly structured code. I am a
            very detail-oriented developer in my work.
          </p>

          {/* /--------------/ EXPERIENCE /------------------/ */}

          <h1 className="uppercase m-0 mb-2 mt-20 text-xl font-light tracking-tight text-gray-900 dark:text-white">
            EXPERIENCE
          </h1>

          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-5 mb-2">
            2024 - Continue
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-blue-500">
            NextJs Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Fast Technologies
          </p>
          <p className="text-textGray">
          Experienced Next.js Developer with a strong background in building high-performance web applications. Previously worked at Fast Technologies, where I specialized in creating dynamic, scalable, and user-friendly solutions. Passionate about modern web development and optimizing user experiences.
          </p>

          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-10 mb-2">
            2023 - 2024
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-blue-500">
            Mern Stack Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Noble Bridge Technologies
          </p>
          <p className="text-textGray">
            As a MERN Stack Developer at Noble Bridge Technologies, I built and
            maintained web applications using MongoDB, Express.js, React, and
            Node.js. I developed scalable backend services, responsive
            frontends, integrated APIs, and ensured smooth client-server
            communication to deliver quality solutions.
          </p>

          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-10 mb-2">
            2022 - 2023
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-blue-500">
            Front-end Developer
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            LetSkill
          </p>
          <p className="text-textGray">
          As a MERN Stack Developer at LetSkill, I was responsible for
            building and maintaining full-stack web applications using MongoDB,
            Express.js, React, and Node.js. My role involved developing scalable
            backend services, creating responsive frontend, integrating APIs,
            and collaborating with cross-functional teams. I worked on managing
            databases efficiently and ensuring seamless communication between
            the client and server, delivering high-quality solutions aligned
            with business requirements.
          </p>

          {/* /--------------/ education /------------------/ */}
          <h1 className="uppercase m-0 mb-2 mt-20 text-xl font-light tracking-tight text-gray-900 dark:text-white">
            EDUCATION
          </h1>

          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-10 mb-2">
            2020 - 2024
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-blue-500">
            BSIT (BS in Information Technology)
          </h5>
          <p className="text-gray-400 text-sm font-[100] w-[90%] mt-2 mb-3">
            Punjab University of Pakistan
          </p>

          {/* /--------------/ Skills /------------------/ */}

          <h1 className="uppercase m-0 mb-2 mt-20 text-xl font-light tracking-tight text-gray-900 dark:text-white">
            Skills
          </h1>
          <div className="mt-5 grid sm:grid-cols-2 grid-cols-1">
            <div className="sm:p-2">
              <div className="mb-3 flex gap-3 items-center">
                <FaHtml5 className="text-[#FC4F13] text-3xl" />
                <h1>HTML</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <IoLogoCss3 className="text-[#306AF1] text-3xl" />
                <h1>CSS</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <IoLogoJavascript className="text-[#F7E025] text-3xl" />
                <h1>JavaScript</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <RiTailwindCssFill className="text-[#1DC0CD] text-3xl" />
                <h1>Tailwind CSS</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <DiJqueryLogo className="text-[#0F77B6] text-3xl" />
                <h1>JQuery</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <SiRedux className="text-[#7B50BD] text-3xl" />
                <h1>Redux</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <FaAws className="text-[#FF9C08] text-3xl" />
                <h1>AWS</h1>
              </div>
            </div>
            <div className="sm:p-2">
              <div className="mb-3 flex gap-3 items-center">
                <FaReact className="text-[#66DBFB] text-3xl" />
                <h1>React JS</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <RiNextjsFill className="dark:text-white text-3xl" />
                <h1>Next JS</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <FaNodeJs className="text-[#84BF08] text-3xl" />
                <h1>Node Js</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <SiExpress className="dark:text-white text-3xl" />
                <h1>Express</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <SiMongodb className="text-[#08EE69] text-3xl" />
                <h1>MongoDB</h1>
              </div>
              <div className="mb-3 flex gap-3 items-center">
                <GrMysql className="text-[#08658D] text-3xl" />
                <h1>MySQL</h1>
              </div>
            </div>
          </div>

          {/* /--------------/ Awards /------------------/ */}

          <h1 className="uppercase m-0 mb-2 mt-20 text-xl font-light tracking-tight text-gray-900 dark:text-white">
            Awards
          </h1>

          <p className="mt-5 text-gray-400 text-sm font-[100] w-[90%] mb-3">
            Corvit
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            AWS (Amazon Web Services)
          </h5>

          <p className="mt-5 text-gray-400 text-sm font-[100] w-[90%] mb-3">
            LetSkill
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            Mern Stack Developer
          </h5>

          <p className="mt-5 text-gray-400 text-sm font-[100] w-[90%] mb-3">
            Noble Bridge Technologies
          </p>
          <h5 className="m-0 text-md font-light tracking-tight text-gray-900 dark:text-white">
            Front-end Developer
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Credential;
