import React from 'react'
import { Button } from '@/components/ui/button' 
interface PreferenceCardFooterProps {
  ItemPrice:number | undefined;
}
export default function PreferenceCardFooter({ItemPrice}:PreferenceCardFooterProps) {
  return (
    <div className=' flex justify-between items-center p-5 mt-5 border border-solid bosrder-lightBlue rounded-lg bg-white'>
    <p className=' text-xl text-Blue600 font-bold'>{'$'+ ItemPrice}</p>
    <Button> Add To Cart </Button>
    </div>
  )
}
