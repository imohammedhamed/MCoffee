"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import loginImgSrc from '@/public/illustration5.svg'
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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast';
export default function Login() {
  const router = useRouter()
  const loading = useRef(false);
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    loading.current=true
    const loginData = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    })

    if (loginData?.ok) {
      toast.success(`Successfully authenticated`);
      router.push('/')
      router.refresh()
    } else {
      toast.error('!!Useremail or password is incorrect')
    }
    loading.current=false
  }

  return (
    <>
      <div className='flex flex-row justify-between items-center'>
        <div className='lg:w-1/3  container min-h-screen lg:px-28 lg:pb-10 pt-24'>
          <h2 className='text-6xl font-bold text-DarkBlue py-10'>
            <span className='text-Blue600'>L</span>og In
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type='email' {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <br />
              <Button type="submit" disabled={loading.current} className='w-full'>{loading.current ? <span className="loading loading-dots loading-sm"></span> :`Submit`}</Button>
              <p className='text-sm text-DarkBlue p-2'>
                IF YOU {`DON'T`} HAVE AN ACCOUNT ? <Link href='/signup' className='font-semibold text-Blue600 hover:underline'>SIGN UP</Link>
              </p>
            </form>
          </Form>
        </div>
        <div className='bg-Blue100 h-screen w-2/4 sm:hidden'>
          <div className='flex min-h-screen justify-center items-center'>
            <Image src={loginImgSrc} alt='Login Img' width={500} height={150} />
          </div>
        </div>
      </div>
      <div className='absolute top-10 lg:left-24 left-10 flex justify-center items-center gap-2 text-Blue600 hover:gap-3 transition-all '>
        <FaArrowLeft />
        <Link href='/'>Go back</Link>
      </div>
      <p className="absolute bottom-0 right-5 py-2 text-DarkBlue font-semibold text-xs">Copyright© 2023-2024 @ MCoffee</p>
    </>
  )
}
