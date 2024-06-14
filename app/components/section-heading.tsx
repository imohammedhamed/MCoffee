import React from 'react'

export default function SectionHeading({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>):React.JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center pb-16 pt-32">
            <h1 className="text-4xl font-normal">{children}</h1>
            <div className="w-20 border-darkBlue border mb-2"></div>
            <div className="w-10 border-darkBlue border"></div>
        </div>
    )
}
