"use client";
import { ModeToggle } from "@/components/dark";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lefti from "../leftbar/page";
import { leftn } from "../redux/slice";

// import { useRouter } from "next/navigation";

const Navbar = () => {
  const { lefti, tabs } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  // const router = useRouter();

  return (
    <>
    <div className="loader-anim flex fixed top-0 left-0 w-full space-x-2 justify-center items-center bg-white h-screen dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
          </div>
      <nav
        style={{ position: "relative" }}
        className="w-full z-40 py-3 dark:bg-customGray"
      >
        <div data-aos="fade-down" data-aos-duration="600" className="max-w-[1200px] sm:px-10 px-5 mx-auto flex justify-between">
          <div className="flex justify-between">
            <div className="flex gap-5 item-center w-full sm:full md:w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <div className="w-1/3 block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
                <button
                  onClick={() => dispatch(leftn())}
                  className=" justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-lg flex gap-2 items-center px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <Link href={"/"}>
                  <h1 className="text-xl text-nowrap">₳Li Raza</h1>
                  {/* <Image
                    src={logos}
                    alt=""
                    className="h-full w-full"
                    style={{}}
                    height={300}
                    width={300}
                  /> */}
                </Link>
              </div>
            </div>
          </div>

          <div className="w-max hidden items-center sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
            <ul className="flex items-center space-x-10 justify-center ">
              <li>
                <Link href={"/"} className={` dark:hover:text-white hover:text-black ${tabs === "Home" ? "" : "text-gray-500"} `}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={` dark:hover:text-white hover:text-black ${tabs === "About" ? "" : "text-gray-500"} `}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/work"} className={` dark:hover:text-white hover:text-black ${tabs === "Work" ? "" : "text-gray-500"} `}>
                  Work
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className={` dark:hover:text-white hover:text-black ${tabs === "Contact" ? "" : "text-gray-500"} `}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between">
            <div className="hidden sm:hidden md:block lg:block xl:block 2xl:block">
              <ModeToggle />
            </div>
            <div></div>
          </div>
        </div>
      </nav>

      {lefti ? <Lefti /> : ""}

      <div className="relative"></div>
    </>
  );
};

export default Navbar;
