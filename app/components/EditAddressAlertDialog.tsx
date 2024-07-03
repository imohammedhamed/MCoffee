"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaPen } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { toast } from "react-hot-toast";

interface EditAddressAlertDialogProps {
  userId: string;
  id: string;
  area: string;
  streetName: string;
  buildingType: string;
  buildingNumber: string;
  floorNumber: string;
  apartmentNumber: string;
  mobileNumber: string;
}

export default function EditAddressAlertDialog({
  userId,
  id,
  area,
  streetName,
  buildingType,
  buildingNumber,
  floorNumber,
  apartmentNumber,
  mobileNumber,
}: EditAddressAlertDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const AddressSchema = z.object({
    userId: z.string(),
    id: z.string(),
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
      userId: userId,
      id: id,
      area: area,
      streetName: streetName,
      buildingType: buildingType,
      buildingNumber: buildingNumber,
      floorNumber: floorNumber,
      apartmentNumber: apartmentNumber,
      mobileNumber: mobileNumber,
    },
  });

  async function onSubmit(values: z.infer<typeof AddressSchema>) {
    try {
      setLoading(true);
      const hasChanges =
        values.area !== area ||
        values.streetName !== streetName ||
        values.buildingType !== buildingType ||
        values.buildingNumber !== buildingNumber ||
        values.floorNumber !== floorNumber ||
        values.apartmentNumber !== apartmentNumber ||
        values.mobileNumber !== mobileNumber;

      if (hasChanges) {
        const response = await fetch("/api/update-address", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success("Successfully updated your address");
          router.refresh();
        } else {
          const errorResponse = await response.json();
          toast.error("Failed to update address", errorResponse);
        }
      } else {
        toast.error("No changes detected");
      }
    } catch (_) {
      toast.error("An error occurred while updating your address");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="lightBlue" className="px-3">
          <FaPen className="text-Blue600 size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[365px] bg-Blue100 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-DarkBlue">Edit Your address</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-DarkBlue font-bold">Area</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Street Name</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Building Type</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Building Number</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Floor Number</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Apartment Number</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
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
                  <FormLabel className="text-DarkBlue font-bold">Mobile Number</FormLabel>
                  <FormControl>
                    <Input className="text-DarkBlue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="ghostLightBlue"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Save changes"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
