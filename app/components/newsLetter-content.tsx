import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
interface newsLetterContentprop{
    title: String | undefined,
    subTitle:String | undefined,        
    bodyContent:String | undefined,     
    buttonContent:String | undefined,   
    imgSrc: string | StaticImport,
    isReverse:boolean,
}
export default function NewsLetterContent(prop :newsLetterContentprop) {
    return (
<<<<<<< HEAD
            <div className={`w-full flex flex-col justify-center items-center text-center text-lightBlue2 mb-4 *:w-full *:h-80 lg:*:w-1/2 ${prop.isReverse ? "lg:flex-row" : "lg:flex-row-reverse" } lg:px-32`}>
            <div className="bg-darkBlue px-4 py-8 flex flex-col justify-between items-center">
                <div>
                <h2 className="text-3xl text-lightBlue font-normal">{prop.title}</h2>
=======
            <div className={`sm:flex-shrink-0 w-full flex flex-col justify-center items-center text-center text-Blue50 mb-4 *:w-full *:h-80 lg:*:w-1/2 md:*:w-1/2 ${prop.isReverse ? "lg:flex-row | md:flex-row" : "lg:flex-row-reverse | md:flex-row-reverse" } lg:px-32`}>
            <div className="bg-DarkBlue px-4 py-8 flex flex-col justify-between items-center">
                <div>
                <h2 className="text-3xl text-Blue300 font-normal">{prop.title}</h2>
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
                <p className="italic">{prop.subTitle}</p>
                </div>
                <p className="italic">{prop.bodyContent}</p>
                <Button variant="ghost" className="w-24 border border-Blue600">{prop.buttonContent}</Button>
            </div>
<<<<<<< HEAD
            <div className="bg-lightBlue px-4 py-8">
=======
            <div className="bg-Blue300 px-4 py-8">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
                <div className="w-full h-full bg-summerBg01 bg-contain relative">
                <Image
                    src={prop.imgSrc}
                    // layout="fill"
                    fill
                    objectFit="contain"
                    alt="newsLetterContent"
                    className="w-full h-full"
                />
                </div>
            </div>
            </div>
    )
}
