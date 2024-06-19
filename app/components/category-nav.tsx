"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface CategoryNavProps{
    Name: string | undefined,
    Id : String | undefined,
    Active:string ,
}

export default function CategoryNav({Name,Id,Active}:CategoryNavProps) {
    const router = useRouter()
    
    function handleClick(){
        if(Id==="666f62470a947d597a3e15bb"){
            router.push(`/Menu`)
        }else{
            router.push(`/Menu/${Id}`)
        }
    }
    return (
    <div className='flex justify-center items-center p-1'>
      <Button 
      onClick={handleClick}
      className= {cn(Active === Id ? ' bg-Blue600 text-white' : 'bg-transparent text-DarkBlue',"sm:p-1.5 font-semibold")}>
        {Name}
      </Button>
    </div>
  )
}
