import React from 'react'
import DeleteAddressAlertDialog from './DeleteAddressAlertDialog'
import EditAddressAlertDialog from './EditAddressAlertDialog'
interface AddressCardProps{
  userId          : string | any;
  id              : string | any;
  area            : String | any;
  streetName      : String | any;
  buildingType    : String | any;
  buildingNumber  : String | any;
  floorNumber     : String | any;
  apartmentNumber : String | any;
  mobileNumber    : String | any; 
}
export default function AddressCard({userId,id,area,streetName,buildingType,buildingNumber,floorNumber,apartmentNumber,mobileNumber} :AddressCardProps ) {
  return (
    <div className=' bg-white rounded-lg py-3 px-3 m-2 w-full flex flex-col justify-center items-center'>
      <div className='AddressCard header| *:text-DarkBlue pb-3 w-full '>
        <h1 className=' text-lg font-semibold pb-2'>{`${buildingType} (${area} - ${streetName})`}</h1>
        <p className='text-base font-medium'>{`building: ${buildingNumber} - floor: ${floorNumber} - apartment: ${apartmentNumber}`}</p>
      </div> 
      <div className=' flex justify-between items-center w-full'>
        <p className=' text-lightGrey text-base font-semibold'>{`mobile: ${mobileNumber}`}</p>
        <div className=' flex justify-centers items-center gap-3'>
          <DeleteAddressAlertDialog addressId={id}/>
          <EditAddressAlertDialog 
            userId          ={userId}
            id              ={id}
            area            ={area}
            streetName      ={streetName}
            buildingType    ={buildingType}
            buildingNumber  ={buildingNumber}
            floorNumber     ={floorNumber}
            apartmentNumber ={apartmentNumber}
            mobileNumber    ={mobileNumber} 
          />
        </div>
      </div>
    </div>
  )
}
