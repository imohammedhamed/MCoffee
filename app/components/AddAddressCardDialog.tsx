"use client"
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FaAddressBook } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {toast } from 'react-hot-toast';

interface AddAddressCardDialogProps {
    userid:string | undefined;
}

export default function AddAddressCardDialog(Prop: AddAddressCardDialogProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const AddressSchema = z.object({
        userId          :z.string(),
        area: z.string().min(1, "Area is required"),
        streetName: z.string().min(1, "Street name is required"),
        buildingType: z.string().min(1, "Building type is required"),
        buildingNumber: z.string().min(1, "Building number is required"),
        floorNumber: z.string().min(1, "Floor number is required"),
        apartmentNumber: z.string().min(1, "Apartment number is required"),
        mobileNumber: z.string().regex(/^[0-9]{10}$/, "Invalid mobile number"),
    });

    const form = useForm<z.infer<typeof AddressSchema>>({
        resolver: zodResolver(AddressSchema),
        defaultValues: {
            userId          : Prop.userid,
            area            : "",
            streetName      : "",
            buildingType    : "",
            buildingNumber  : "",
            floorNumber     : "",
            apartmentNumber : "",
            mobileNumber    : "",
        },
    });

    async function onSubmit(values: z.infer<typeof AddressSchema>) {
        try {
            setLoading(true);
            const response = await fetch('/api/add-address', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success(' your Successfully add a new address');
                router.refresh();
            } else {
                toast.error("Failed to create address", await response.json());
            }
        } catch (_) {
            toast.error("An error occurred while creating the address");

        }finally{
            setLoading(false);

        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button className=' flex justify-center items-center gap-2'>
              <FaAddressBook className=' text-white font-bold'/>
              Add
            </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[365px] bg-Blue100 rounded-lg">
                <DialogHeader>
                    <DialogTitle className=' text-DarkBlue'>Add a New address</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="area"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Area</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="6Th of October..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="streetName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Street Name</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="First street, Second street..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="buildingType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Building Type</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="Apartment, House, Work..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="buildingNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Building Number</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="85, your building number..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="floorNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Floor Number</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="2, 3, 4, 5 or second floor..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="apartmentNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Apartment Number</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="22, your apartment number..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className=' text-DarkBlue font-bold'>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input className="text-DarkBlue" placeholder="(20+) delivery is only within Egypt..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={loading} className=' w-full'>{loading?<span className="loading loading-dots loading-sm"></span> :`Add`}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
