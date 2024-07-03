import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const AddressSchema = z.object({
  id: z.string(),
  area: z.string(),
  streetName: z.string(),
  buildingType: z.string(),
  buildingNumber: z.string(),
  floorNumber: z.string(),
  apartmentNumber: z.string(),
  mobileNumber: z.string(),
});

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      area,
      streetName,
      buildingType,
      buildingNumber,
      floorNumber,
      apartmentNumber,
      mobileNumber,
    } = AddressSchema.parse(body);

    const updatedAddress = await prisma.address.update({
      where: { id: id },
      data: {
        area,
        streetName,
        buildingType,
        buildingNumber,
        floorNumber,
        apartmentNumber,
        mobileNumber,
      },
    });

    return NextResponse.json(updatedAddress);
  } catch (error) {
    console.error("Error updating address:", error);
    return NextResponse.json(
      { error: "Failed to update address" },
      { status: 500 }
    );
  }
}
