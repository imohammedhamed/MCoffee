"use client"
import React,{useState} from 'react';
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { BiTrashAlt } from "react-icons/bi";
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from 'next/navigation';
import {toast } from 'react-hot-toast';

interface DeleteAddressAlertDialogProp {
    addressId: string; // Assuming you also have an addressId to delete a specific address
}

export default function DeleteAddressAlertDialog({addressId }: DeleteAddressAlertDialogProp) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
      try {
        setLoading(false)
        const response = await fetch('/api/delete-address', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: addressId }),
        });

        if (response.ok) {
            toast.success('Successfully Deleted');
            router.refresh();
        } else {
            toast.error("Failed to delete address", await response.json());
        }
    } catch (error) {
        toast.error("An error occurred while deleting the address");
    }finally{
        setLoading(true)

    }
  }

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="lightRed" className='px-3'><BiTrashAlt className='size-6'/></Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-Blue100 rounded-lg max-w-[350px]'>
            <AlertDialogHeader>
                <AlertDialogTitle className='text-Red text-2xl'>Delete address</AlertDialogTitle>
                <AlertDialogDescription className='text-DarkBlue font-semibold'>
                Are you sure you wish to delete this address ?
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className='flex flex-row justify-center items-center gap-2'>
                <AlertDialogCancel className='bg-transparent border border-solid border-Blue600 text-Blue600 font-bold'>No</AlertDialogCancel>
                <Button variant="lightRed" className=' font-bold lg:mt-2' disabled={loading} onClick={handleDelete}>{loading?<span className="loading loading-dots loading-sm"></span> :`Yes`}</Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
}
