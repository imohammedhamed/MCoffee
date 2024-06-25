import React from 'react'
import prisma from '@/lib/prisma'
import UserInfo from '@/app/components/UserInfo'
import UserInfoNav from '@/app/components/UserInfoNav'
import UserInfoCard from '@/app/components/UserInfoCard' 
export default async function page({params}:any) {
    const user = await prisma.user.findUnique({
        where:{
            id:params.id
        },include:{
            profile:true,
            addresses:true
        }
    })

  return (
    <>
    <div className=' w-full flex flex-col justify-center items-center'>
        <UserInfo fullName={user?.fullName} picture={user?.profile?.picture}/>
        <UserInfoNav/> 
    </div>
    <UserInfoCard
      userid={params.id}
      email ={user?.email}
      password ={user?.password}
      fullName ={user?.fullName}
      phone ={user?.phone}
      picture={user?.profile?.picture}
      address ={user?.addresses}
    />
    </>
    
  )
}
