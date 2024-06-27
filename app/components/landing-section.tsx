import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export default function LandingSection() {
    return (
        <>
<<<<<<< HEAD
        <div className="bg-gradient-to-t from-lightBlue/60 to-white flex justify-center items-center pt-32 pb-44 lg:pt-48 lg:pb-60 ">
            <div className=" container mx-auto flex flex-wrap justify-center border-b-2 border-darkBlue rounded-3xl items-center lg:justify-between lg:flex-row-reverse md:flex-row-reverse lg:gap-16">
=======
        <div className="bg-gradient-to-t from-Blue300/75 to-white flex justify-center items-center pt-32 pb-44 lg:pt-48 lg:pb-60 ">
            <div className=" container mx-auto flex flex-wrap justify-center border-b-2 border-DarkBlue rounded-3xl items-center lg:justify-between lg:flex-row-reverse md:flex-row-reverse lg:gap-16">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
            <div className="relative">
                {/* home images */}
                <div className="absolute -left-5 *:absolute w-72 h-60 lg:w-96 ">
                <div className="w-10 h-10 top-20 left-0 -rotate-45 lg:w-14 lg:h-14 lg:top-24">
                    <Image src="/brewing2.png" fill alt="brewing" />
                </div>
                <div className="w-10 h-10 left-32 -top-8 lg:w-14 lg:h-14">
                    <Image src="/CoffeeBeans.png" fill alt="coffeebeans" />
                </div>
                <div className="w-10 h-10 -right-4 top-24 rotate-45 lg:w-14 lg:h-14 lg:-right-12">
                    <Image src="/iceAmericano-it.png" fill alt="americano" />
                </div>
                </div>
                <div className="p-8 w-72 h-60 lg:p-0 lg:w-96 lg:h-[30rem]">
                    <Image src="/illustration3.svg" fill alt="Logo" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center pb-8 lg:text-start lg:items-start lg:pb-4">
                <div>
<<<<<<< HEAD
                <p className="italic font-bold text-xs text-darkBlue lg:text-sm lg:font-normal lg:not-italic">
                    <span className=' font-bold'>MCoffee: </span>Your Online Destination for Premium Coffee
                </p>
                <h1 className="text-2xl font-normal text-darkBlue py-2 lg:font-bold lg:text-6xl">
                    Where Every Cup <br />
                    Holds a Moment of Magic
                </h1>
                <p className="italic text-xs text-darkGrey lg:not-italic pt-5 lg:font-normal lg:text-lg">
=======
                <p className="italic font-bold text-xs text-DarkBlue lg:text-sm lg:font-normal lg:not-italic">
                    <span className=' font-bold'>MCoffee: </span>Your Online Destination for Premium Coffee
                </p>
                <h1 className="text-2xl text-DarkBlue py-2 font-bold lg:text-6xl">
                    Where Every Cup <br />
                    Holds a Moment of Magic
                </h1>
                <p className="italic text-xs text-lightGrey lg:not-italic pt-7 sm:pt-0 font-normal lg:text-lg">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
                    Find the perfect brew to enhance your workday, and <br />
                    enjoy the finest coffee delivered right to your door.
                </p>
                </div>
                <div className="flex justify-center items-center gap-4 py-4 px-2">
                <div className="flex *:-mx-2">
                    <Avatar>
                    <AvatarImage src="https://i.pinimg.com/564x/b8/36/73/b83673c019229f8dab4560a3baab099c.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                    <AvatarImage src="https://i.pinimg.com/564x/22/01/12/220112ce9c3967e2022ce13673a9d4f6.jpg" />
                    <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                    <AvatarImage src="https://i.pinimg.com/564x/e2/8f/cb/e28fcbb4d90dbdbf694e2e2716fa5b5c.jpg" />
                    <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                </div>
                <div>
<<<<<<< HEAD
                    <p className="text-darkBlue italic text-xs font-bold">
                    <span className="text-primary">+200 Users </span>join us Now
                    </p>
                    <p className="italic text-xs  text-darkGrey">
=======
                    <p className="text-DarkBlue italic text-xs font-bold">
                    <span className="text-Blue600">+200 Users </span>join us Now
                    </p>
                    <p className="italic text-xs  text-DarkBlue">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
                    Membership or SginUp
                    </p>
                </div>
                </div>
                <div className="flex gap-4">
                <Button>
                    <Link
                    href="/signup"
                    className="text-secondary text-sm lg:text-base p-4 font-bold">
                    Join Us
                    </Link>
                </Button>
                <Button
                    variant="ghost"
<<<<<<< HEAD
                    className="border border-darkBlue text-sm font-extrabold"
                    >
                    <Link href="/login" className="text-darkBlue">
=======
                    className="border border-DarkBlue text-sm lg:text-base p-4 font-bold"
                    >
                    <Link href="/Menu" className="text-DarkBlue">
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
                    Browse Menu
                    </Link>
                </Button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
