"use client"
import React from 'react'
import Image from 'next/image'
import loginImgSrc from '@/public/illustration4.svg'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
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
export default function Signup() {
    const router = useRouter()
    const formSchema = z.object({
        email: z.string(),
        fullName : z.string(),
        phone : z.string(),
        password: z.string(),
        confirmPassword :z.string(),
      })
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            fullName: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
      })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const respons = await fetch('api/users',{
            method:'POST',
            headers:{'content-type':'application'},
            body: JSON.stringify({
                email: values.email,
                fullName: values.fullName,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
            }),
        });

        if(respons.ok){
            router.push('/login')
        }else{
            console.error("there's a problem some where")
        }
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
                        <Input placeholder="enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>phone</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your phone number" type="text" {...field} />
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
                        <Input placeholder="enter your password" type='password' {...field} />
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
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your password again" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <br />
                <Button type="submit" className=' w-full'>Submit</Button>
                <p className=' text-sm text-DarkBlue p-2'>IF YOU HAVE AN ACCOUNT ? <Link href='/login' className=' font-semibold text-Blue600 hover:underline'>LOG IN</Link></p>
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
