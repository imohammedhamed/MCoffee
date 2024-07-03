import React from 'react'
import Image from 'next/image'
import imgsrc from'@/public/illustration1.svg'
import Link, { LinkProps } from 'next/link'
import { Button } from '@/components/ui/button'
interface ErrorInTheShoppingCartProps{
    title:string
    LinkTitle:string
    Linkhref:string
}
export default function ErrorInTheShoppingCart({title,LinkTitle,Linkhref}:ErrorInTheShoppingCartProps) {
  return (
    <section className=' container mx-auto rounded-lg my-24 bg-white border border-solid border-lightBlue p-5 flex flex-col justify-center items-center text-center'>
        <Image src={imgsrc} alt='user Cart is empty' className='py-10 rotate-90' width={250} height={250}/>
        <h1 className=' text-2xl sm:text-xl text-Blue600'>{title}</h1>
        <p className=' text-base text-lightGrey font-bold pb-5'>What are you waiting for?</p>
        <Button className=' text-base'>
        <Link href={`/${Linkhref}`}>{LinkTitle}</Link>
        </Button>
    </section>
  )
}
