import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import CFShop from '@/public/illustration6.svg'
export default function AboutSection() {
    return (
        <>
            <section id='about' className='container mx-auto'>
            <SectionHeading> About Us </SectionHeading>
            <div className=" text-primaryDark flex justify-between items-center gap-5 lg:gap-24 sm:flex-col">
                    <div className='FANCY-BORDER-RADIUS | bg-gradient-to-t from-primaryLight/50 to-secondaryLight p-5'>
                        <Image src={CFShop} alt='about img' width={600} height={100}/>
                    </div>
                <p className=' text-2xl sm:text-center'>
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
