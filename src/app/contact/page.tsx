import React from "react";
import FloatingElement from "../Compo/FloatingElement";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import Link from "next/link";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";



import hangPic from "@/../public/assets/icon2.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full dark:bg-customGray py-24">
      <FloatingElement float={true} />
      <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1">
        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="lg:p-0 sm:p-5">
          <h1>CONTACT INFO</h1>
          <div className="flex gap-5 items-center mt-12">
            <div className="rounded-[10px] p-5 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG">
              <IoMailOutline className="text-3xl" />
            </div>
            <div>
              <p className="text-textGray text-sm mb-2">MAIL US</p>
              <h1 className="text-sm mb-1">
                <Link href={"mailto:aliraza41030@gmail.com"}>
                aliraza41030@gmail.com
                </Link>
              </h1>
              {/* <h1 className="text-sm mb-1">
                <Link href={"mailto:random@gmail.com"}>random@gmail.com</Link>
              </h1> */}
            </div>
          </div>
          <div className="flex gap-5 items-center mt-12">
            <div className="rounded-[10px] p-5 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG">
              <IoCallOutline className="text-3xl" />
            </div>
            <div>
              <p className="text-textGray text-sm mb-2">CONTACT US</p>
              <h1 className="text-sm mb-1">
                <Link href={"tel:03014103011"}>0301 4103011</Link>
              </h1>
              <h1 className="text-sm mb-1">
                <Link href={"tel:03054582227"}>0305 4582227</Link>
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-12">
            <div className="rounded-[10px] p-5 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG">
              <CiLocationOn className="text-3xl" />
            </div>
            <div>
              <p className="text-textGray text-sm mb-2">LOCATION</p>
              <h1 className="text-sm mb-1">Lahore, Pakistan</h1>
            </div>
          </div>

          <h1 className="mt-16">SOCIAL INFO</h1>
          <div className="flex gap-5 items-center mt-10">
            <Link href={"https://www.fiverr.com/ahmadraza4571"} className="rounded-full p-6 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer">
              <SiFiverr className="text-3xl" />
            </Link>
            <Link href={"https://www.upwork.com/freelancers/ahmadr293"} className="rounded-full p-6 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer">
              <FaUpwork className="text-3xl" />
            </Link>
            <Link href={"https://www.linkedin.com/in/ahmad-raza-01a49a239/"} className="rounded-full p-6 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG hover:shadow-2xl hover:scale-105 cursor-pointer">
              <FaLinkedinIn className="text-3xl" />
            </Link>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" className="lg:col-span-2 col-span-1">
          <div className="relative rounded-[30px] sm:p-10 p-5 shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG">
            <Image
              className="object-cover w-[40px] dark:invert-[0] dark:brightness-100 brightness-0 duration-300 absolute top-0 right-12"
              src={hangPic}
              alt=""
            />
            <h5 className="m-0 mt-1 sm:text-4xl text-3xl font-light tracking-tight text-gray-900 dark:text-white">
              Let&apos;s work <span className="text-blue-600">together.</span>
            </h5>
            <input
              type="text"
              placeholder="Name *"
              className="mt-10 rounded-[10px] text-textGray p-4 px-5 w-full shadow-md dark:border-0 border border-[rgb(60,60,60,0.2)] dark:border-[rgb(39,39,39)] dark:bg-linear_Input"
            />
            <input
              type="text"
              placeholder="Email *"
              className="mt-3 rounded-[10px] text-textGray p-4 px-5 w-full shadow-md dark:border-0 border border-[rgb(60,60,60,0.2)] dark:border-[rgb(39,39,39)] dark:bg-linear_Input"
            />
            <input
              type="text"
              placeholder="Your Subject *"
              className="mt-3 rounded-[10px] text-textGray p-4 px-5 w-full shadow-md dark:border-0 border border-[rgb(60,60,60,0.2)] dark:border-[rgb(39,39,39)] dark:bg-linear_Input"
            />
            <textarea
              rows={5}
              placeholder="Your Message *"
              className="mt-3 rounded-[10px] text-textGray p-4 px-5 w-full shadow-md dark:border-0 border border-[rgb(60,60,60,0.2)] dark:border-[rgb(39,39,39)] dark:bg-linear_Input"
            ></textarea>
            <button className="mt-3 rounded-[10px] text-textGray p-4 px-5 w-full shadow-md dark:border-0 border-2 dark:border-[rgb(39,39,39)] dark:bg-[rgb(45,45,45)]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
