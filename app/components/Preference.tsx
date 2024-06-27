import React from 'react'
import PreferenceCard from './PreferenceCard'
import Image from 'next/image'
import PreferenceCardFooter from './PreferenceCardFooter'
import {ChoiceOfSize,ChoiceOfCoffee,ExtraShot,ChoiceOfMilk} from '@/lib/data'
interface PreferenceProps{
    title:String | undefined,
    picture: string | undefined,
    price:number | undefined,
    categoryId:string | undefined
}
export default function Preference({title,picture,price,categoryId}:PreferenceProps) {
    const isItfood = categoryId === "6673aacc848eb720e9daeacf" || categoryId === "6673aacc848eb720e9daeace";
  return (
    <section className=' container mx-auto pt-24 pb-24'>
        <div className=' flex justify-center items-center flex-col pb-10'>
        <Image src={`${picture}`} alt='item Picture' className=' bg-transparent' width={250} height={250}/>
        <h1 className=' text-DarkBlue text-3xl sm:text-center p-2'>{title}</h1>
        </div>
        {
            !isItfood && (
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
            <PreferenceCard 
            title={"Your Choice Of Size"}
            paraParagraph={"required"}
            PreferenceCardArr={ChoiceOfSize}
            />
            <PreferenceCard 
            title={"Your Choice Of Coffee"}
            paraParagraph={"required"}
            PreferenceCardArr={ChoiceOfCoffee}
            />
            <PreferenceCard 
            title={"Extra Shot"}
            paraParagraph={"Optional"}
            PreferenceCardArr={ExtraShot}
            />
            <PreferenceCard 
            title={"Your Choice Of Milk"}
            paraParagraph={"required"}
            PreferenceCardArr={ChoiceOfMilk}
            />
            </div>
            )}
        <PreferenceCardFooter ItemPrice={price} />
    </section>
  )
}
