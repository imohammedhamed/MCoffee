import React from 'react'

export default function SectionHeading({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>):React.JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center pb-28 pt-32">
            <h1 className="text-6xl sm:text-4xl font-semibold text-lightGrey opacity-50 text-center">{children}</h1>
        </div>
    )
}
