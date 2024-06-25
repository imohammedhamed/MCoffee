import React from 'react'
import DeleteAddressAlertDialog from './DeleteAddressAlertDialog'
interface AddressCardProps{
  id              :string
  area            : String
  streetName      : String
  buildingType    : String
  buildingNumber  : String
  floorNumber     : String
  apartmentNumber : String
  mobileNumber    : String 
}
export default function AddressCard({id,area,streetName,buildingType,buildingNumber,floorNumber,apartmentNumber,mobileNumber} :AddressCardProps ) {
  return (
    <div className=' bg-white rounded-lg py-3 px-3 m-2 w-full flex flex-col justify-center items-center'>
      <div className='AddressCard header| *:text-DarkBlue pb-3 w-full '>
        <h1 className=' text-lg font-semibold pb-2'>{`${buildingType} (${area} - ${streetName})`}</h1>
        <p className='text-base font-medium'>{`building: ${buildingNumber} - floor: ${floorNumber} - apartment: ${apartmentNumber}`}</p>
      </div> 
      <div className=' flex justify-between items-center w-full'>
        <p className=' text-lightGrey text-base font-semibold'>{`mobile: ${mobileNumber}`}</p>
        <div className=' flex justify-centers items-center gap-3'>
          <DeleteAddressAlertDialog 
          addressId={id}
          />
        </div>
      </div>
    </div>
  )
}
