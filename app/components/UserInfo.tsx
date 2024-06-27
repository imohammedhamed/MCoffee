import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
interface UserInfoProps{
    fullName: String|undefined,
    picture: String|undefined|null;
}

export default function UserInfo({fullName,picture}:UserInfoProps) {
  return (
    <div className=' w-full pt-10 pb-5'>
        <div className=' flex flex-col justify-center items-center gap-2'>
        <Avatar className=' size-28'>
            <AvatarImage src={`${picture}`} alt={`${fullName} Picture `} />
            <AvatarFallback>{fullName}</AvatarFallback>
        </Avatar>
        <h1 className=' text-4xl py-4 text-DarkBlue'>{fullName}</h1>
        </div>
    </div>
  )
}
