import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod"
const userSchema = z.object({
    userid:z.string(),
    userPicture: z.any(),
})
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const {userPicture, userid} = userSchema.parse(body);

        // Check if the new username is already taken
        const userNameExist = await prisma.profile.findUnique({
            where:{
                userId:userid,
                picture:userPicture
            }
        })

        if (userNameExist) {
            return NextResponse.json({ user: null, message: "The new Picture is already Exist." }, { status: 409 });
        }

        // Update the user's full name
        const updatedUser = await prisma.profile.update({
            where: {
                userId: userid
            },
            data: {
                picture: userPicture
                // You can add other fields to update here if needed
            }
        });

        return NextResponse.json({ user: updatedUser, message: "user Picture updated successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error updating full name:", error);
        return NextResponse.json({ message: "Failed to update user Picture." }, { status: 500 });
    }
}
