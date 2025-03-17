'use client'
import React, { useState, useEffect } from 'react'

const FloatingElement = ({float}:any) => {
    const [check, setCheck] = useState(float)

    useEffect(() => {
        setTimeout(() => {
            setCheck(false)
        }, 2000)
    },[])

  return (
    <div className={`${check ? "FloatingElement" : ""} z-50 w-full fixed top-[-100vh] opacity-0 invisible left-0 h-[100vh] dark:bg-lighterGray bg-[#ececec] shadow-sm`}></div>
  )
}

export default FloatingElement