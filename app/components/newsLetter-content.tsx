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
            <div className={`sm:flex-shrink-0 w-full flex flex-col justify-center items-center text-center text-Blue50 mb-4 *:w-full *:h-80 lg:*:w-1/2 md:*:w-1/2 ${prop.isReverse ? "lg:flex-row | md:flex-row" : "lg:flex-row-reverse | md:flex-row-reverse" } lg:px-32`}>
            <div className="bg-DarkBlue px-4 py-8 flex flex-col justify-between items-center">
                <div>
                <h2 className="text-3xl text-Blue300 font-normal">{prop.title}</h2>
                <p className="italic">{prop.subTitle}</p>
                </div>
                <p className="italic">{prop.bodyContent}</p>
                <Button variant="ghost" className="w-24 border border-Blue600">{prop.buttonContent}</Button>
            </div>
            <div className="bg-Blue300 px-4 py-8">
                <div className="w-full h-full bg-summerBg01 bg-contain relative">
            <Image
                src={prop.imgSrc}
                fill
                alt="newsLetterContent"
                className="w-full h-full"
                style={{ objectFit: 'contain' }} // Or 'cover' depending on your design needs
            />
                </div>
            </div>
            </div>
    )
}
