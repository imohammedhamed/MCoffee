import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
interface OrderSummaryProps{
    OrderId:string
    item:{title:string,price:number}[]

}
export default function OrderSummary({OrderId,item}:OrderSummaryProps) {
    enum FEES {
        DELIVERY_FEE = 1.2,
        SERVICE_FEE = 0.99
    }
    let TotalAmount = 0;
    item.map(item =>{
        return TotalAmount +=item.price;
    })

  return (
    <div className=' py-5 px-10 sm:px-5 sm:min-w-[366px] bg-white rounded-lg border border-solid border-lightBlue '>
         <div className='Header | border-b border-Blue600 py-2'>
            <h1 className=' text-3xl text-DarkBlue font-semibold pb-2'> Order Summary</h1>
            <h4 className=' text-lg text-Blue600 font-medium'>You Have in Your Cart</h4>
         </div>
         <div className=' mb-10 mt-4'>
            {
                item.map(it =>{
                    return(
                        <>
                        <div className=' flex w-full justify-between items-center'>
                            <p className=' text-DarkBlue text-lg'>{it.title}</p>
                            <p className=' text-Blue600 font-bold'>{'$'+it.price}</p>
                        </div>
                        </>
                    )
                })
            }
         </div>
         <div className=' *:text-DarkBlue pb-2'>
            <div className=' flex w-full justify-between items-center '>
                <p className=' text-lg'>Total</p>
                <p className=' font-bold'>{'$'+Math.floor(TotalAmount)}</p>
            </div>
            <div className=' flex w-full justify-between items-center '>
                <p className=' text-lg'>Delivery fee</p>
                <p className=' font-bold'>{'$'+FEES.DELIVERY_FEE}</p>
            </div>
            <div className=' flex w-full justify-between items-center'>
                <p className='text-lg'>Service fee</p>
                <p className='font-bold'>{'$'+FEES.SERVICE_FEE}</p>
            </div>
         </div>
            <div className=' flex w-full justify-between items-center *:text-DarkBlue border-t border-DarkBlue py-5'>
                <p className='text-xl font-semibold'> Total Amount </p>
                <p className=' text-lg font-bold'>{'$'+ Math.floor(FEES.SERVICE_FEE + FEES.DELIVERY_FEE+TotalAmount)}</p>
            </div>
            <AlertDialog>
                    <AlertDialogTrigger asChild>
                    <Button className=' w-full font-bold text-base'>CHECKOUT</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className=' bg-Blue100 rounded-lg max-w-[350px]'>
                    <AlertDialogHeader>
                    <AlertDialogTitle className=' text-Red text-xl font-bold'>!! Oops</AlertDialogTitle>
                    <AlertDialogDescription className=' text-DarkBlue font-semibold'>
                    {`i am soory but this just an MVP so there isn't a payment gateway integration yet
                    But feel free to take a look at the case study I have added all the details there.`}
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel className='bg-transparent border border-solid border-Blue600 text-Blue600 font-bold'>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Case Study</AlertDialogAction>
                    </AlertDialogFooter>
                    </AlertDialogContent>
            </AlertDialog>
    </div>
  )
}
