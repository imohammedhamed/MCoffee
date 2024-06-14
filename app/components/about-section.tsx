import React from 'react'
import SectionHeading from './section-heading'
export default function AboutSection() {
    return (
        <>
            <section>
            <SectionHeading> About Us </SectionHeading>
            <div className="bg-darkBlue w-full p-8 text-center text-lightBlue2 relative lg:py-16 lg:px-32">
                <p className=" container mx-auto">
                {`We've 10 year's experience of crafting the finest quality coffee. From
                revolutionary methods and commitment to quality to unforgettable
                successes that have made Costa Coffee the Nation's Favourite coffee
                shop, our story is as unique as our coffee`}
                </p>
            </div>

        </section>
        </>
    )
}
