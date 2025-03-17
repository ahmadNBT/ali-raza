import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import redirectImage from '@/../public/assets/icon.svg'
import hangPic from '@/../public/assets/icon2.png'



const TalkTogether = () => {
  return (
    <Link
      href="/about"
      data-aos="zoom-in" data-aos-duration="600"
      className="flex w-full lg:h-[230px] sm:h-[300px] h-[250px] flex-col justify-between group relative rounded-[30px] shadow-md border-2 dark:border-[rgb(39,39,39)] dark:bg-linear_BG bg-white p-5 py-8"
    >
        <Image className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5" src={redirectImage} alt="" />
        <Image className="object-cover w-[40px] dark:invert-[0] dark:brightness-100 brightness-0 duration-300 absolute top-0 left-10" src={hangPic} alt="" />
        <h5 className="absolute bottom-10 left-10 m-0 mt-1 sm:text-5xl text-3xl font-light tracking-tight text-gray-900 dark:text-white">
            Let&apos;s <br/> work <span className='text-blue-600'>together.</span>
        </h5>
    </Link>
  )
}

export default TalkTogether