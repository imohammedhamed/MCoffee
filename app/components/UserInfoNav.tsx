"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from "next-auth/react"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
const UserInfoNavContent = [
    {
        id: "1",
        name: "Account info",
        path: "/",
    },
    {
        id: "2",
        name: "Your Orders",
        path: "/",
    }
] as const;

export default function UserInfoNav() {
    const [activeId, setActiveId] = useState<string>("1");
    function handleClick(id: string) {
        setActiveId(id);
    }

    return (
        <div className='flex justify-center items-center p-2 bg-blue-100 w-min rounded-lg relative'>
            <div className='flex justify-center items-center'>
                {UserInfoNavContent.map(content => (
                    <Button
                        onClick={() => handleClick(content.id)}
                        key={content.id}
                        className={cn(
                            activeId === content.id ? 'bg-blue-600 text-white' : 'bg-transparent text-DarkBlue',
                            "mx-1.5 font-bold"
                        )}
                    >
                        {content.name}
                    </Button>
                ))}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                    <Button variant="lightRed" className=' mx-2 font-semibold'>SignOut</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className=' bg-Blue100 rounded-lg max-w-[350px]'>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='text-Red text-2xl'>SignOut</AlertDialogTitle>
                        <AlertDialogDescription className=' text-DarkBlue font-semibold'>
                        Are you sure you want to SignOut?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className=' flex flex-row justify-center items-center gap-2'>
                        <AlertDialogCancel className='bg-transparent border border-solid border-Blue600 text-Blue600 font-bold'>No</AlertDialogCancel>
                        <Button variant="lightRed" className=' font-bold lg:mt-2' onClick={()=>{signOut({ callbackUrl: '/' })}}>Yes</Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <span className=' border-l border-lightGrey absolute right-[6.7rem] h-6'></span>
        </div>
    );
}
