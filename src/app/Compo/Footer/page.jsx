"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import FloatingElement from "../FloatingElement";

const Footer = () => {
  
  return (
    <>
      <FloatingElement float={true} />
    <div className="w-full dark:bg-customGray py-24">
      <div className="w-9/12 mx-auto ">
        <div className="lg:mx-auto flex justify-center items-center flex-col text-center">
          <div className="w-max">
            <Link href='/'>₳Li Raza</Link>
            {/* <Image src={logos} alt='' height={200} width={200}/> */}
          </div>
          <div className="w-max sm sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
            <ul className="dark:text-gray-400 flex gap-10 mt-5">
              <li className="mt-3 transition dark:hover:text-white hover:underline">
                <Link href={"/"}>
                  Home
                </Link>
              </li>
              <li className="mt-3 transition dark:hover:text-white hover:underline">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="mt-3 transition dark:hover:text-white hover:underline">
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className="mt-3 transition dark:hover:text-white hover:underline">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100063885495397"
                  }
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 ">
        <div className="w-full sm:w-full md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12  mx-auto flex flex-wrap justify-between">
          <div className="w-full p-4 flex flex-wrap justify-center items-center gap-2">
            <div className="w-max ">
              <p className="text-md dark:text-gray-400">
                © All rights reserved by Ali Raza.
              </p>
            </div>
            <span
              style={{ height: "20px", width: "1px" }}
              className="bg-gray-400"
            ></span>
            <div className="w-max ">
              <p className="text-md dark:text-gray-400">Designed in Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
