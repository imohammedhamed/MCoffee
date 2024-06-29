"use client"
import React,{useState} from 'react'
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
 
interface ChangeUserEmailDialogProps{
    userid    :string | undefined | any
    className :string | undefined | any
    password  :String | undefined | any
    email     :String | undefined | any
}

export default function ChangeUserEmailDialog({userid,className,password,email}:ChangeUserEmailDialogProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const formSchema = z.object({
      userid:z.string(),
      email:z.string().email({ message: "Invalid email address" }),
      Enteredpassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        userid:userid,
        email: "",
        Enteredpassword: "",
      },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
      try { 
        setLoading(true);
        if(values.Enteredpassword===password){
          const response = await fetch('/api/user-update-info/update-email',{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          })
          if (response.ok) {
            toast.success(' your Successfully updating your email');
            router.refresh(); // Refresh the page upon successful update
          }
        }else{
          toast.error("your Password do not match your old password");
        }
      }catch (_) {
          toast.error("An error occurred while updating your email");
      }finally{
        setLoading(false);
      }
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
    <Button variant="lightBlue" className={cn("h-8 px-2",className)}><FaPen className='size-5'/></Button>
    </DialogTrigger>
<DialogContent className="max-w-[350px] lg:max-w-[450px] bg-Blue100 rounded-lg">
    <DialogHeader className='pb-7'>
      <DialogTitle className=' text-DarkBlue'>Change Your Email</DialogTitle>
    </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=' text-DarkBlue font-bold'>Enter Your New email </FormLabel>
                    <FormControl>
                      <Input placeholder={email} {...field} />
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
              <Button variant="ghostLightBlue" disabled={loading} type="submit" className=' w-full'>{loading?<span className="loading loading-dots loading-sm"></span> :`Save changes`}</Button>
            </form>
      </Form>
</DialogContent>
</Dialog>
  )
}
