"use client"
import React from 'react'
import { useState } from 'react'
import UserInfo from './UserInfo'
import UserInfoNav from './UserInfoNav'
import UserInfoCard from './UserInfoCard'
import UserOrdersInfoCard from './UserOrdersInfoCard'
interface Address{
    id              :String,
    area            :String,
    streetName      :String,
    buildingType    :String,
    buildingNumber  :String,
    floorNumber     :String,
    apartmentNumber :String,
    mobileNumber    :String, 
  }
interface UserInfoPageProps{
    userId      :string
    password   :string|undefined    
    fullName   :string|undefined     
    phone      :string|undefined     
    picture    :string|undefined|null   
    address    :Address[]|string|undefined
    email      :string|undefined

}
export default function UserInfoPage({userId,email,password,picture,phone,address,fullName}:UserInfoPageProps) {
    const [activeId,setactiveId] = useState<string>("1")
  return (
    <section>
    <div className=' w-full flex flex-col justify-center items-center'>
    <UserInfo fullName={fullName} picture={picture} />
    <UserInfoNav activeId= {activeId} setactiveId={setactiveId}/> 
    </div>
    {
        activeId==='1'?(
        <UserInfoCard
            userid={userId}
            email ={email}
            password ={password}
            fullName ={fullName}
            phone ={phone}
            picture={picture}
            address ={address}
          />):(
            <UserOrdersInfoCard/>
          )
    }

    </section>
  )

}
