import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { FaCircle ,FaCartShopping } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default async function UserAccountBtn({className}:{className?:string}) {
    const session = await getServerSession(authOptions)
  return (
    <div className={ cn('flex justify-between items-center gap-5',className)}>
    <Link href={`/${session?.user.id}`} className='p-2 flex flex-col justify-between items-center relative sm:w-full hover:opacity-50'>
        <h1 className=' text-DarkBlue text-base sm:text-sm '>My Account</h1>
        <p className=' text-lightGrey text-xs font-semibold overflow-hidden '>! {session?.user.name}</p>
        <FaCircle className='absolute top-2 -left-2 sm:-left-1 text-[9px] text-Blue600'/>
    </Link>
        <Button className=' flex justify-center items-center gap-3 sm:w-full sm:hidden md:hidden'>
            <FaCartShopping/>
            <Link href='/'>Cart</Link>
        </Button>
    </div>
  )
}

