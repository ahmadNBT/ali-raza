import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import redirectImage from '@/../public/assets/icon.svg'
import pic from '@/../public/assets/my-works.png'
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";



const SkillsCard = () => {
  return (
    <Link
      href="/credential"
      data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000"
      className="flex w-full lg:h-[230px] sm:h-[300px] flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8"
    >
        <Image className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5" src={redirectImage} alt="" />

      <div className="flex pt-6 justify-evenly items-center">
        {/* <Image className="object-cover md:w-3/4 w-1/2 mx-auto brightness-100 dark:invert-[0] invert-[1] " src={pic} alt="" /> */}
        <FaReact className='dark:text-white text-black text-4xl' />
        <RiNextjsLine className='dark:text-white text-black  text-4xl' />
        <FaNodeJs className='dark:text-white text-black  text-4xl' />
        <SiMongodb className='dark:text-white text-black text-4xl' />
        <RiTailwindCssFill className='dark:text-white text-black text-4xl' />
        <SiTypescript className='dark:text-white text-black  text-4xl' />
      </div>
      <div className="w-full p-2 leading-normal">
        <p className="text-xs text-textGray uppercase">SPECIALIZATION</p>
        <h5 className="m-0 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Services Offering
        </h5>
      </div>
    </Link>
  )
}

export default SkillsCard