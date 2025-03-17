import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import redirectImage from '@/../public/assets/icon.svg'
import pic from '@/../public/assets/gfonts.png'

const BlogsCard = () => {
  return (
    <Link
      href="/about"
      data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000"
      className="flex w-full lg:h-[230px] sm:h-[300px] border-2 dark:border-[rgb(39,39,39)] flex-col justify-between group relative rounded-[30px] shadow-md dark:bg-linear_BG bg-white p-5 py-8"
    >
        <Image className="object-cover w-[40px] group-hover:opacity-100 dark:invert-[0] dark:brightness-100 brightness-0 opacity-30 duration-300 absolute bottom-8 right-5" src={redirectImage} alt="" />

      <div className="w-full h-full text-center">
        <Image className="object-cover md:w-3/4 w-1/2 mx-auto brightness-100 dark:invert-[0] invert-[1] " src={pic} alt="" />
      </div>
      <div className="w-full p-2 leading-normal">
        <p className="text-xs text-textGray uppercase">Blog</p>
        <h5 className="m-0 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          GFonts
        </h5>
      </div>
    </Link>
  )
}

export default BlogsCard