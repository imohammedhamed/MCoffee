"use client";
import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa6";

interface PreferenceCardHeaderProps {
    ItemID: string | undefined;
    title: string | undefined;
    paraParagraph: string | undefined;
    PreferenceCardArr: readonly { id: string; name: string }[];
}

export default function PreferenceCard({ ItemID, title, paraParagraph, PreferenceCardArr }: PreferenceCardHeaderProps) {
    const [selectedPreference, setSelectedPreference] = useState<string | null>(null);

    async function handleClick(id: string, itemName: string) {
        setSelectedPreference(id);

    }

    return (
        <div className='bg-white border border-solid border-lightBlue p-5 rounded-lg w-full h-full min-h-[350px]'>
            <div className='header flex justify-between items-end w-full border-b pb-2 mb-5 border-Blue600'>
                <h3 className='text-Blue600 text-2xl sm:text-xl font-bold'>{title}</h3>
                <p className='text-gray-500 text-base sm:text-xs font-bold'>{paraParagraph}</p>
            </div>
            <div>
                {PreferenceCardArr.map(item => (
                    <ul
                        key={item.id}
                        role='list'
                        onClick={() => handleClick(item.id, item.name)}
                        className='flex justify-between items-center w-full rounded-lg cursor-pointer px-2 lg:hover:border border-solid border-lightBlue'
                    >
                        <li className='text-xl pt-2 pb-2 text-DarkBlue no-underline'>{item.name}</li>
                        <FaCircle className={selectedPreference === item.id ? 'text-Blue600' : 'text-gray-500'} />
                    </ul>
                ))}
            </div>
        </div>
    );
}
