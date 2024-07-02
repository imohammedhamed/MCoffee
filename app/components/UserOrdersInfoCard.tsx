import React from 'react'
import Image from 'next/image'
import imgsrc from '@/public/illustration1.svg'
import Link from 'next/link'
export default function UserOrdersInfoCard() {
  return (
    <section className=' lg:container lg:mx-auto'>
        <div className=' bg-Blue100 w-full p-5 lg:p-10 my-5 rounded-lg'>
                <div className=' flex flex-col justify-center items-center'>
                    <div className='py-10'>
                        <Image src={imgsrc} alt='user orders' className=' rotate-90' width={200} height={200}/>
                    </div>  
                    <h2 className=' text-4xl text-Red py-5  text-center '>{`!! Oops`}</h2>
                    <h3 className=' text-lg text-lightGrey  text-center '>{`i am soory but this just an MVP so  there isn't a  payment gateway integration yet so i cant craft this section`}</h3>
                    <p className=' text-base text-lightGrey text-center '>{`But feel free to take a look at the case study I have added all the details there`}</p>
                    <Link href='/' className=' px-5 py-3 my-5 rounded-lg bg-Blue600 text-Blue50 text-base font-bold hover:opacity-80'>Case Study</Link>
                </div>
        </div>
    </section>
  )
}
