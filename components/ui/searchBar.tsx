import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <div className='relative'>
        <input className='p-5 min-w-[350px] text-primary bg-white border border-solid bosrder-lightBlue rounded-lg' placeholder='Search...' type="text" />
        <FaMagnifyingGlass className=' text-primary text-xl absolute top-1/3 right-3'/>
    </div>
  )
}
