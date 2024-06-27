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
  address?: Address[] | undefined | null | any,
}
export default function UserInfoCard({userid,email,password,fullName,phone,picture,address}: UserInfoCardProps) {
  return (
    <div className=' lg:container lg:mx-auto'>
        <div className=' bg-Blue100 w-full p-5 lg:p-10 my-5 rounded-lg'>
          <div className=' flex justify-center items-center w-full'>
          <Avatar className=' size-20'>
            <AvatarImage src={`${picture}`} alt={`${fullName} Picture `} />
            <AvatarFallback>{fullName}</AvatarFallback>
          </Avatar>
          </div>
          <div className=' grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5 py-20'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">your fullName</Label>
                <Input type="email" id="email" placeholder={`${fullName}`} disabled/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">your email</Label>
                <Input type="email" id="email" placeholder={`${email}`} disabled/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">your password</Label>
                <Input type="email" id="email" placeholder={`${password}`} disabled/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">your phone Number</Label>
                <Input type="email" id="email" placeholder={`${phone}`} disabled/>
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
