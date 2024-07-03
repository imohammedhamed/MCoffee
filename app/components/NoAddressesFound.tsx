import React from 'react'
import Image from 'next/image'
import imgsrc from '@/public/illustration2.svg'
import AddAddressCardDialog from './AddAddressCardDialog'
import Link from 'next/link'
interface NoAddressesFoundProps{
  userid:string
}
export default function NoAddressesFound({userid}:NoAddressesFoundProps) {
  return (
    <div className=' flex flex-col justify-start items-center py-16'>
        <Image src={imgsrc} alt='No Addresses Found' width={250} height={250}/>
        <h1 className=' text-xl text-Blue600 mt-5'>Your Addresses list looks empty.</h1>
        <p className=' text-base text-lightGrey font-bold pb-5'>What are you waiting for?</p>
        <AddAddressCardDialog userid={userid} />
    </div>
  )
}
