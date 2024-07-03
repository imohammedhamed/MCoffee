import React from 'react'
import ImgSrc from "@/public/illustration6.svg"
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
  return (
    <div className=" container min-h-screen flex justify-center items-center flex-col gap-5 sm:gap-3 *:text-center">
        <Image src={ImgSrc} alt='user account ' width={250} height={250}/>
        <h1 className=' text-3xl sm:text-xl text-DarkBlue font-bold'>{`Welcome To MCoffee , we're so happy to have you here`}</h1>
        <p className=' text-lg sm:text-sm text-lightGrey font-semibold'>Please Log In using the account you just created</p>
        <Link href='/login' className=' text-sm text-Blue50 bg-Blue600 rounded-lg font-bold px-10 py-3'>Log In</Link>
    </div>
  )
}
