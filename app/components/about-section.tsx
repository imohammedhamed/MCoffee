import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import CFShop from '@/public/illustration6.svg'
export default function AboutSection() {
    return (
        <>
            <SectionHeading> About Us </SectionHeading>
            <section id='about'>
            <div className=" bg-DarkBlue flex justify-between items-center gap-5 lg:gap-24 sm:flex-col">
                <p className=' p-10 container mx-auto text-Blue50 text-xl text-center'>
                {`We've 10 year's experience of crafting the finest quality coffee.`} <br /> <br />
                {`From revolutionary methods and commitment 
                to quality to unforgettable successes 
                that have made Costa Coffee the Nation's Favourite coffee shop,
                our story is as unique as our coffee   `}
                </p>
            </div>
        </section>
        </>
    )
}
