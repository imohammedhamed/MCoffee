import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { ItemID, preferences } = body;

        const updatedItem = await prisma.item.update({
            where: {
                id: ItemID,
            },
            data: {
                preference: {
                    update: {
                        size: preferences.size,
                        coffeeType: preferences.coffeeType,
                        extraShot: preferences.extraShot,
                        milkType: preferences.milkType,
                    },
                },
            },
        });

        return NextResponse.json(updatedItem);
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
