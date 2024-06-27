import React from 'react'

export default function SectionHeading({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>):React.JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center pb-16 pt-32">
<<<<<<< HEAD
            <h1 className="text-4xl font-normal">{children}</h1>
            <div className="w-20 border-darkBlue border mb-2"></div>
            <div className="w-10 border-darkBlue border"></div>
=======
            <h1 className="text-6xl font-normal text-lightGrey opacity-50">{children}</h1>
>>>>>>> 64640b1e5a3da474efd90466a5a4109863207ac6
        </div>
    )
}
