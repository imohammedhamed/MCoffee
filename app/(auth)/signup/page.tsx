"use client"
import React from 'react'
import Image from 'next/image'
import loginImgSrc from '@/public/illustration4.svg'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
export default function page() {
    const formSchema = z.object({
        email: z.string(),
        password: z.string(),
        fullName : z.string(),
        confirmPassword :z.string(),
      })
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
      })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
      }
  return (    
        <>
         <div className=' flex flex-row justify-between items-center'>
            <div className=' w-1/3 container px-28 pb-10'>
            <h2 className='text-6xl font-bold text-DarkBlue py-10'><span className='text-Blue600'>S</span>ign Up</h2>
            
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Confirm Password...</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your password again" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <br />
                <Button type="submit" className=' w-full'>Submit</Button>
                <p className=' text-sm text-DarkBlue'>IF YOU HAVE AN ACCOUNT ? <Link href='/login' className=' font-semibold text-Blue600 hover:underline'>LOG IN</Link></p>
            </form>
            </Form>
            </div>
            <div className=' bg-Blue100 h-screen w-2/4'>
            <div className=' flex min-h-screen justify-center items-center'>
            <Image src={loginImgSrc} alt='Login Img' width={500} height={150}/>
            </div>
            </div>
         </div>
         <div className=' absolute top-10 left-24 flex justify-center items-center gap-2 text-Blue600 hover:gap-3 transition-all '>
            <FaArrowLeft/>
            <Link href='/'>Go back</Link>
         </div>
         <p className=" absolute bottom-0 right-5 py-2 text-DarkBlue font-semibold text-xs">Copyright© 2023-2024 @ MCoffee</p>

        </>
  )
}
