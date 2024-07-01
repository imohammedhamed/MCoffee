"use client"
import React ,{useState} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BiTrashAlt } from "react-icons/bi";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
interface ItemUserProductsCardProps{
    id          :string
    orderId     :string
    title       :String| undefined
    picture     :String| undefined |any
    price       :string | undefined
    preferences? :string|undefined|any,
}
export default function UserProductsCard({orderId,id,title,picture,price,preferences}:ItemUserProductsCardProps) {
    const router = useRouter()
    const [loading , setloading] = useState(false)
    async function handleRemove(orderId: string, itemId: string){
        setloading(true)
            try {
                const response = await fetch('/api/handleRemoveItem', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ orderId, itemId }),
                });
                if (response.ok) {
                    toast.success('Item removed from your List');
                    router.refresh()
                }
            } catch (_) {
                toast.error('Error removing item from order');
            }finally{
                setloading(false)
            }
    }
  return (
    <div className=' max-w-[750px] py-5 pr-5 bg-white border border-solid border-lightBlue rounded-lg flex justify-start items-start my-3'>
        <span>
            <Image src={picture} alt='item Picture' width={150} height={150}/>
        </span>
        <div className=' flex flex-col justify-start items-start w-full'>
            <div className=' flex justify-between items-start w-full'>
                <div className=''>
                    <h2 className=' text-3xl sm:text-xl text-DarkBlue font-medium text-clip'>{title}</h2>
                    {/* <p className=' text-xs text-lightGrey font-bold'>{`${preferences.size} - ${preferences.coffeeType} - ${preferences.milkType}`}</p> */}
                </div>
                <p className='text-lg text-nowrap text-Blue600 font-bold'>{`$${price}`}</p>
            </div>
            <div className=' w-full flex justify-between items-center mt-10 sm:mt-5'>
                <Button 
                variant='lightRed' 
                className=' flex justify-center items-center gap-2 font-semibold '
                onClick={()=> handleRemove(orderId,id)}
                disabled={loading}
                >
                {
                    loading?<span className="loading loading-spinner loading-sm"></span> : <BiTrashAlt className=' size-5'/>
                }
                <span className=' sm:hidden'>Remove</span>
                </Button>
            </div>
        </div>
    </div>
  )
}
