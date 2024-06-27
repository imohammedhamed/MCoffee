import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {
    const { id } = await req.json();
    try {
        const deletedAddress = await prisma.address.delete({
            where: { id },
        });
        return NextResponse.json({ address: deletedAddress, message: "Address deleted" }, { status: 200 });
    } catch (error) {
        console.error("Failed to delete address", error);
        return NextResponse.json({ message: "Failed to delete address" }, { status: 500 });
    }
}
