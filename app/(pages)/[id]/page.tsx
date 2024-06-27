import React from 'react'
import prisma from '@/lib/prisma'
import UserInfoPage from '@/app/components/UserInfoPage'
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
    <section>
      <UserInfoPage
      userId  ={params.id}      
      password  ={user?.password}     
      fullName  ={user?.fullName} 
      phone     ={user?.phone}
      picture  ={user?.profile?.picture}
      address   ={user?.addresses}   
      email     ={user?.email}   
      />
    </section>
    
  )
}
