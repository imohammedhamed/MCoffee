"use client"
import React from 'react'
import { useState } from 'react';
import { FaCircle } from "react-icons/fa6";
interface PreferenceCardHeaderProps{
    title:String | undefined,
    paraParagraph:String | undefined
    PreferenceCardArr: readonly{ id: string; name: string }[]
}

export default function PreferenceCard({title,paraParagraph,PreferenceCardArr}:PreferenceCardHeaderProps) {
  const [IsFaCircle,setIsFaCircle] = useState<string | null>(null);
  function handleClick(id:string){
    setIsFaCircle(prevSelectedItemId => (prevSelectedItemId === id ? null : id));

  }
  return (
    <div className=' bg-white  border border-solid bosrder-lightBlue p-5 rounded-lg w-full h-full min-h-[350px]'>
      <div className='header | flex justify-between items-center w-full border-b pb-2 mb-5 border-Blue600 '>
          <h3 className=' text-Blue600 text-2xl font-bold'>{title}</h3>
          <p className=' text-gray-500 text-base font-bold'>{paraParagraph}</p>
      </div>
      <div>
          {
            PreferenceCardArr.map(item =>{
              return(
                <ul role='list'  onClick={() => handleClick(item.id)} className='flex justify-between items-center w-fulls rounded-lg cursor-pointer px-2 | lg:hover:border border-solid border-lightBlue'>
                <li key={item.id} className='text-xl pt-2 pb-2 text-DarkBlue no-underline'>{item.name}</li>
                <FaCircle className={IsFaCircle === item.id ? `text-Blue600` : `text-gray-500`}/>
                </ul>
              )
            })
          }
        </div>
    </div>
  )
}
