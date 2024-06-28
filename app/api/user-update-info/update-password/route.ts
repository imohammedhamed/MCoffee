import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod"
const userSchema = z.object({
    userid:z.string(),
    Newpassword: z.string(),
})
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const {Newpassword, userid} = userSchema.parse(body);

        // Check if the new username is already taken
        const userNameExist = await prisma.user.findUnique({
            where: {
                id:userid,
                password:Newpassword
            }
        });

        if (userNameExist) {
            return NextResponse.json({ user: null, message: "The new password is already Exist." }, { status: 409 });
        }

        // Update the user's full name
        const updatedUser = await prisma.user.update({
            where: {
                id: userid
            },
            data: {
                password: Newpassword
                // You can add other fields to update here if needed
            }
        });

        return NextResponse.json({ user: updatedUser, message: "Full name updated successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error updating full name:", error);
        return NextResponse.json({ message: "Failed to update full name." }, { status: 500 });
    }
}
