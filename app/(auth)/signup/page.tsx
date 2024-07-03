"use client"
import React,{useRef, useState} from 'react'
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
import { toast } from 'react-hot-toast';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullName: z.string().min(1, { message: "Full name is required" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits long" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z.string().min(6, { message: "Password confirmation is required" })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function Signup() {
  const router = useRouter()
  const loading = useRef(false);
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
    loading.current=true
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        fullName: values.fullName,
        phone: values.phone,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }),
    });

    if (response.ok) {
      toast.success('sign Up  Successfully');
      router.push('/login')
      router.refresh()
    } else {
      toast.error('This account already exists try to login ')
    }
    loading.current=false
  }

  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <div className='lg:w-1/4 container min-h-screen flex flex-col justify-center items-center'>
          <h2 className='lg:text-6xl md:text-6xl sm:text-5xl text-start lg:w-[500px] md:w-[500px] sm:w-full font-bold text-DarkBlue lg:py-16 md:py-16 sm:py-5'>
            <span className='text-Blue600'>S</span>ign Up
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 lg:w-[500px] md:w-[500px] sm:w-full">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=' text-DarkBlue font-bold'>Full Name</FormLabel>
                    <FormControl>
                      <Input className='text-DarkBlue w-full' placeholder="Enter your full name" {...field} />
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
                    <FormLabel className=' text-DarkBlue font-bold'>Email</FormLabel>
                    <FormControl>
                      <Input className='text-DarkBlue w-full' placeholder="Enter your email" type="email" {...field} />
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
                    <FormLabel className=' text-DarkBlue font-bold'>Phone</FormLabel>
                    <FormControl>
                      <Input className='text-DarkBlue w-full' placeholder="Enter your phone number" type="text" {...field} />
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
                    <FormLabel className=' text-DarkBlue font-bold'>Password</FormLabel>
                    <FormControl>
                      <Input className='text-DarkBlue w-full' placeholder="Enter your password" type='password' {...field} />
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
                    <FormLabel className=' text-DarkBlue font-bold'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input className='text-DarkBlue w-full' placeholder="Enter your password again" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              <Button type="submit" disabled={loading.current} className='w-full'>{loading.current? <span className="loading loading-dots loading-sm"></span> :`Submit`}</Button>
              <p className='text-sm text-DarkBlue p-2'>
                IF YOU HAVE AN ACCOUNT? <Link href='/login' className='font-semibold text-Blue600 hover:underline'>LOG IN</Link>
              </p>
            </form>
          </Form>
        </div>
        <div className='bg-Blue100 h-screen w-2/4 sm:hidden'>
          <div className='min-h-screen flex justify-center items-center'>
            <Image src={loginImgSrc} alt='Signup Img' width={500} height={150} />
          </div>
        </div>
      </div>
        <Link href='/' className='absolute top-10 lg:left-24 left-7 flex justify-center items-center gap-2 text-Blue600 hover:ml-2 p-2 rounded-xl cursor-pointer transition-all '>
        <FaArrowLeft />
          Go back
        </Link>
      <p className="absolute bottom-0 right-5 py-2 text-DarkBlue font-semibold text-xs">Copyright© 2023-2024 @ MCoffee</p>
    </>
  )
}
