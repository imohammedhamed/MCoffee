"use client"
import React from 'react'
import Image from 'next/image'
import { FaCartPlus } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface MenuContentProps{
    title:String | undefined,
    picture: string 
    price:number | undefined,
    categoryId :string,
    id:string
}

export default function MenuContent({title,picture,price,categoryId,id}:MenuContentProps) {
  const router =useRouter()
  function handleClick(){
    router.push(`/Menu/${categoryId}/${id}`)
  }
  return (
    <>
    <div className=' p-5 flex justify-center items-center'>
      <div className=' bg-white text-DarkBlue border border-solid bosrder-lightBlue p-5 rounded-lg flex justify-between items-center flex-col w-full h-full min-h-[350px]'>
        <div className = 'p-2'>
            <Image src={picture} className="rounded-lg" alt="product img" title="Project img"  width={250} height={250}/>
            </div>
            <h3 className=' text-xl pt-5 pb-5 text-center'>{title}</h3>
            <div className=' w-full flex justify-between items-center'>
            <span className=' text-xl text-primary font-bold'>{'$'+price}</span>
            <Button onClick={handleClick}><FaCartPlus className='text-2xl'/></Button>
            </div>
        </div>
    </div>
    </>
  )
}
