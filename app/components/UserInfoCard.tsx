import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import AddAddressCardDialog from './AddAddressCardDialog';
import AddressCard from './AddressCard'
import ChangeUserNameDialog from './ChangeUserNameDialog';
import ChangeUserPasswordDialog from './ChangeUserPasswordDialog';
import ChangeUserEmailDialog from './ChangeUserEmailDialog';
import ChangeUserPictureDialog from './ChangeUserPictureDialog';
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

interface UserInfoCardProps{
  userid     :string,
  email     :String | undefined,  
  password  :String | undefined,
  fullName  :String | undefined,
  phone     :String | undefined,
  picture: String|undefined|null,
  address?: Address[] | undefined| any,
}
export default function UserInfoCard({userid,email,password,fullName,phone,picture,address}: UserInfoCardProps) {
  return (
    <div className=' lg:container lg:mx-auto'>
        <div className=' bg-Blue100 w-full p-5 lg:p-10 my-5 rounded-lg'>
          <div className=' flex flex-col gap-2 justify-center items-center w-full'>
          <Avatar className=' size-20'>
            <AvatarImage src={`${picture}`} alt={`${fullName} Picture `} />
            <AvatarFallback>{fullName}</AvatarFallback>
          </Avatar>
          <ChangeUserPictureDialog userid={userid}/>
          </div>
          <div className=' grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5 py-20'>
            <div className=" relative grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="fullName" className=' text-DarkBlue text-lg font-medium'>your Name</Label>
                <Input id="fullName" className=' p-6 border border-solid border-lightBlue' placeholder={`${fullName}`} disabled/>
                <ChangeUserNameDialog className=' absolute top-[3.7rem] -translate-y-1/2 right-3'
                  userid  ={userid}
                  password ={password}
                  fullName ={fullName}
                />
            </div>
            <div className=" relative grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className=' text-DarkBlue text-lg font-medium'>your email</Label>
                <Input id="email" className=' p-6 border border-solid border-lightBlue' placeholder={`${email}`} disabled/>
                <ChangeUserEmailDialog className=' absolute top-[3.7rem] -translate-y-1/2 right-3'
                  userid  ={userid}
                  password ={password}
                  email ={email}
                />
            </div>
            <div className=" relative grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className=' text-DarkBlue text-lg font-medium'>your password</Label>
                <Input id="password" className=' p-6 border border-solid border-lightBlue' placeholder={`${password}`} disabled/>
                <ChangeUserPasswordDialog className=' absolute top-[3.7rem] -translate-y-1/2 right-3'
                  userid  ={userid}
                  password ={password}
                />
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center'>
          <div className='addressList header | flex justify-between items-center w-full py-5'>
            <h2 className=' text-2xl font-semibold text-DarkBlue'>Addresses List</h2>
          <AddAddressCardDialog userid={userid} />
          </div>
          {
            address?.length ? (address.map((addre: {id:string;area: String; streetName: String; buildingType: String; buildingNumber: String; floorNumber: String; apartmentNumber: String; mobileNumber: String }) => {
              return(
                <AddressCard
                key={userid}
                id={addre.id}
                area={addre.area}
                streetName={addre.streetName}
                buildingType={addre.buildingType}
                buildingNumber={addre.buildingNumber}
                floorNumber={addre.floorNumber}
                apartmentNumber={addre.apartmentNumber}
                mobileNumber={addre.mobileNumber}
                />
              )
            })) :(
              <p>No addresses found</p>
            )
          }
          </div>
        </div>
    </div>
  )
}
