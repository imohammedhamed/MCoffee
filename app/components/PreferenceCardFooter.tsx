"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' 
import toast from 'react-hot-toast'
interface PreferenceCardFooterProps {
  userId:string|undefined
  ItemPrice:number | undefined;
  itemId:string,
  orderId:string|null
}
export default function PreferenceCardFooter({userId,ItemPrice,itemId,orderId}:PreferenceCardFooterProps) {
  const [loading , setloading] = useState(false)
  const router = useRouter()
  async function handleAdding(){
    setloading(true)
    try {
      if(userId){
        const response = await fetch('/api/addItemToCart',{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId:orderId,
            itemId:itemId
          })
        })
        if(response.ok){
          toast.success(`Item added successfully checkout your cart`)
          router.refresh()
        }
      }else{
        toast.error("Login to enjoy our finest quality coffee")
      }
    } catch (_) {
      toast.error("Internal server error")
    }finally{
      setloading(false)
    }
    
  }
  return (
    <div className=' flex justify-between items-center p-5 mt-5 border border-solid bosrder-lightBlue rounded-lg bg-white'>
    <p className=' text-xl text-Blue600 font-bold'>{'$'+ ItemPrice}</p>
    <Button onClick={handleAdding} disabled={loading} >{loading?<span className="loading loading-dots loading-sm"></span> : `Add To Cart`}</Button>
    </div>
  )
}
