"use client"
import React, { useState } from 'react'
import { ModeToggle } from '@/components/dark';

import { useDispatch, useSelector } from 'react-redux';
import { rightn, searching } from '../redux/slice'



import { useRouter } from 'next/navigation';

const Lefti = () => {
  const [queries, setqueries] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()
    const {lefti} = useSelector((state)=>state.add)
    
  function handleSubmit(event){
    event.preventDefault()
    dispatch(searching(queries))
    dispatch(rightn())
    
   
    
    router.push('/Compo/result')
 
  }
  return (
    <>
            <div className='p-3 sidebar pt-[70px] z-50 fixed bg-white dark:bg-black w-full block sm:block md:block lg:hidden xl:hidden 2xl:hidden h-screen' style={{transition: "0.3s ease-in ", top: "0%", transform: lefti ? 'translateX(0%)' : 'translateX(-100%)', }}>
    
    <button onClick={()=>dispatch(rightn())} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  h-10 px-4 py-2 rounded-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    </button>

    
    <div style={{ zIndex: 1100 }} className='w-1/3 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mt-6 flex justify-between'>
        <ModeToggle    />
        {/* <Users  style={{ zIndex: 1100 }} /> */}
    </div>
    <div className='block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mt-6'>
    </div>
</div>
    </>
  )
}

export default Lefti