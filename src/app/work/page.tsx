import React from "react";
import FloatingElement from "../Compo/FloatingElement";
import Image from "next/image";
import starImage from "@/../public/assets/star-2.png";
import redirectImage from "@/../public/assets/icon.svg";
import NomadzImage from "@/../public/assets/NomadzDigital.png";
import SMSImage from "@/../public/assets/SMS.png";
import SwissImage from "@/../public/assets/Swiss.png";
import Borgholm from "@/../public/assets/Borgholm.png";
import Enrollmate from "@/../public/assets/Enrollmate.png";
import NBTImage from "@/../public/assets/NBT_Image.png";
import Link from "next/link";

const Work = () => {
  return (
    <div className="w-full dark:bg-customGray py-24">
      <FloatingElement float={true} />

      <div className="w-full max-w-[1200px] gap-5 px-5 py-3 mx-auto grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1">
        
        <div className="lg:order-1 order-2 grid gap-5 h-max lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1">

          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
            className="flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
          >
            <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
              <Link target="_blank" href={"https://nomadzdigital.com/"}>
                <Image src={NomadzImage} alt="" />
              </Link>
            </div>
            <Link target="_blank" href={"https://nomadzdigital.com/"}>
              <Image
                className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                src={redirectImage}
                alt=""
              />
            </Link>
            <p className="text-textGray">Mern Stack</p>
            <Link target="_blank" href={"https://nomadzdigital.com/"}>
              <h1>NomadzDigital</h1>
            </Link>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
            className="flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
          >
            <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
              <Link target="_blank" href={"https://swiss-international-tours.vercel.app/"}>
                <Image src={SwissImage} alt="" />
              </Link>
            </div>
            <Link target="_blank" href={"https://swiss-international-tours.vercel.app/"}>
              <Image
                className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                src={redirectImage}
                alt=""
              />
            </Link>
            <p className="text-textGray">Mern Stack</p>
            <Link target="_blank" href={"https://swiss-international-tours.vercel.app/"}>
              <h1>Swiss International</h1>
            </Link>
          </div>

        </div>

        <div className="w-full lg:col-span-2 grid-cols-1 lg:order-1 order-1">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="1000"
            className="flex justify-center gap-5 items-center mb-5"
          >
            <Image className="w-14" src={starImage} alt="" />
            <h1 className="md:text-6xl sm:text-3xl text-xl font-bold dark:text-white text-black">
              ALL PROJECTS
            </h1>
            <Image className="w-14" src={starImage} alt="" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5" >

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                  className=" flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
                >
                  <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
                    <Link target="_blank" href={"https://motivecoder.com/"}>
                      <Image src={NBTImage} alt="" />
                    </Link>
                  </div>
                  <Link target="_blank" href={"https://motivecoder.com/"}>
                    <Image
                      className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                      src={redirectImage}
                      alt=""
                    />
                  </Link>
                  <p className="text-textGray">Mern Stack</p>
                  <Link target="_blank" href={"https://motivecoder.com/"}>
                    <h1>Motive Coders</h1>
                  </Link>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                  className=" flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
                >
                  <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
                    <Link target="_blank" href={"https://receive-sms.live/"}>
                      <Image src={SMSImage} alt="" />
                    </Link>
                  </div>
                  <Link target="_blank" href={"https://receive-sms.live/"}>
                    <Image
                      className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                      src={redirectImage} 
                      alt=""
                    />
                  </Link>
                  <p className="text-textGray">Mern Stack</p>
                  <Link target="_blank" href={"https://receive-sms.live/"}>
                    <h1>RECEIVE SMS</h1>
                  </Link>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                  className=" flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
                >
                  <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
                    <Link target="_blank" href={"https://borgholm.qodeinteractive.com/"}>
                      <Image src={Borgholm} alt="" />
                    </Link>
                  </div>
                  <Link target="_blank" href={"https://borgholm.qodeinteractive.com/"}>
                    <Image
                      className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                      src={redirectImage}
                      alt=""
                    />
                  </Link>
                  <p className="text-textGray">Mern Stack</p>
                  <Link target="_blank" href={"https://borgholm.qodeinteractive.com/"}>
                    <h1>Borgholm</h1>
                  </Link>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                  className=" flex w-full h-max flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5"
                >
                  <div className="flex w-full flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white overflow-hidden mb-4">
                    <Link target="_blank" href={"https://enrollmate.io/"}>
                      <Image src={Enrollmate} alt="" />
                    </Link>
                  </div>
                  <Link target="_blank" href={"https://enrollmate.io/"}>
                    <Image
                      className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-6 right-5"
                      src={redirectImage}
                      alt=""
                    />
                  </Link>
                  <p className="text-textGray">Mern Stack</p>
                  <Link target="_blank" href={"https://enrollmate.io/"}>
                    <h1>Enrollmate</h1>
                  </Link>
                </div>


            </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
