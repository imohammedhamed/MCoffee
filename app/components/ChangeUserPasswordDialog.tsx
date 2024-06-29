 "use client"
import React,{useRef, useState} from 'react'
import { Button } from '@/components/ui/button'
import { FaPen } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
 
interface ChangeUserPasswordDialogProps{
    userid    :string | undefined | any
    className :string | undefined | any
    password  :String | undefined | any
}

export default function ChangeUserPasswordDialog({userid,className,password}:ChangeUserPasswordDialogProps) {
    const router = useRouter()
    const loading = useRef(false);
    const formSchema = z.object({
      userid:z.string(),
      Enteredpassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
      Newpassword:z.string().min(6, { message: "Password must be at least 6 characters long" }),
      confirmPassword: z.string().min(6, { message: "Password confirmation is required" }),
    }).refine(data => data.Newpassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        Enteredpassword: "",
        Newpassword:"",
        confirmPassword:"",
        userid:userid,
      },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
      try { 
        loading.current=true
        if(values.Enteredpassword===password){
          const response = await fetch('/api/user-update-info/update-password',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          })
          if (response.ok) {
            toast.success(' your Successfully updating your password');
            router.refresh(); // Refresh the page upon successful update
          }
        }else{
          toast.error("your Password do not match your old Password");
        }
      }catch (_) {
          toast.error("The new password is already Exist.");
      }finally{
        loading.current=false
      }
    }
  return (
    <Dialog>
          <DialogTrigger asChild>
          <Button variant="lightBlue" className={cn("h-8 px-2",className)}><FaPen className='size-5'/></Button>
          </DialogTrigger>
      <DialogContent className="max-w-[350px] lg:max-w-[450px] bg-Blue100 rounded-lg">
          <DialogHeader className='pb-7'>
            <DialogTitle className=' text-DarkBlue'>Change Your Password</DialogTitle>
          </DialogHeader>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="Newpassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=' text-DarkBlue font-bold'>Enter Your New password </FormLabel>
                          <FormControl>
                            <Input placeholder='Enter Your password...' {...field} />
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
                          <FormLabel className=' text-DarkBlue font-bold'>Confirm your New Password</FormLabel>
                          <FormControl>
                            <Input placeholder='Enter your password again...' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="Enteredpassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=' text-DarkBlue font-bold'>Enter Your Previous password </FormLabel>
                          <FormControl>
                            <Input {...field} type='password' />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button variant="ghostLightBlue" disabled={loading.current} type="submit" className=' w-full'>{loading.current?<span className="loading loading-dots loading-sm"></span> :`Save changes`}</Button>
                  </form>
            </Form>
      </DialogContent>
  </Dialog>
  )
}
