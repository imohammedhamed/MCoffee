import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const addressSchema = z.object({
    userId          :z.string(),
    area            :z.string(),
    streetName      :z.string(),
    buildingType    :z.string(),
    buildingNumber  :z.string(),
    floorNumber     :z.string(),
    apartmentNumber :z.string(),
    mobileNumber    :z.string(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, area, streetName, buildingType, buildingNumber, floorNumber, apartmentNumber, mobileNumber } = addressSchema.parse(body);

        const addressExist = await prisma.address.findFirst({
            where: {
                userId,
                area,
                streetName,
                buildingType,
                buildingNumber,
                floorNumber,
                apartmentNumber,
                mobileNumber,
            }
        });

        if (addressExist) {
            return NextResponse.json({ address: null, message: "Address already exists" }, { status: 409 });
        }

        const newAddress = await prisma.address.create({
            data: {
                userId,
                area,
                streetName,
                buildingType,
                buildingNumber,
                floorNumber,
                apartmentNumber,
                mobileNumber,
            }
        });

        return NextResponse.json({ address: newAddress, message: "Address created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating address"}, { status: 500 });
    }
}
