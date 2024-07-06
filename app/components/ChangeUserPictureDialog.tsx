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
 
interface ChangeUserPictureDialogProps{
    userid    :string | undefined | any
    className?:string | undefined | any
}
export default function ChangeUserPictureDialog({userid,className}:ChangeUserPictureDialogProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const formSchema = z.object({
      userid:z.string(),
      userPicture:z.any(),
    })
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        userid:userid,
        userPicture: "",
      },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
      try { 
            setLoading(true);
            const formData = new FormData();
            formData.append('userid', values.userid);
            formData.append('userPicture', values.userPicture[0]); // Assumes single file upload

            const response = await fetch('/api/user-update-info/update-picture', {
                method: 'PUT',
                body: formData,
            });
          if (response.ok) {
            toast.success(' your Successfully updating your picture');
            router.refresh(); // Refresh the page upon successful update
          }
        
      }catch (_) {
          toast.error("An error occurred while updating your picture");
      }finally{
        setLoading(false);
      }
    }
  return (
    <Dialog>
    <DialogTrigger asChild>
    <span className=' text-base font-semibold text-Blue600 cursor-pointer hover:opacity-70'>Edit your Picture</span>
    </DialogTrigger>
    <DialogContent className="max-w-[350px] lg:max-w-[450px] bg-Blue100 rounded-lg">
    <DialogHeader className='pb-7'>
      <DialogTitle className=' text-DarkBlue'>Change Your picture</DialogTitle>
    </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userPicture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=' text-DarkBlue font-bold'> change your Picture</FormLabel>
                    <FormControl>
                      <Input type='file' className=' cursor-pointer' {...field} />
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
