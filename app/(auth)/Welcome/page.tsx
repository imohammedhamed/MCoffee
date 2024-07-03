"use client"
import React from 'react'
import ImgSrc from "@/public/illustration6.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
export default function page() {
    const router =useRouter()
    function handleClick(){
        router.push('/login')
    }
  return (
    <div className=" container min-h-screen flex justify-center items-center flex-col gap-5 sm:gap-3 *:text-center">
        <Image src={ImgSrc} alt='user account ' width={250} height={250}/>
        <h1 className=' text-3xl sm:text-xl text-DarkBlue font-bold'>{`Welcome To MCoffee , we're so happy to have you here`}</h1>
        <p className=' text-lg sm:text-sm text-lightGrey font-semibold'>Please Log In using the account you just created</p>
        <Button onClick={handleClick} className=' font-bold px-10'>Log In</Button>
    </div>
  )
}
