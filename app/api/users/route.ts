import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const userSchema = z.object({
    email: z.string(),
    fullName : z.string(),
    phone : z.string(),
    password: z.string(),
    confirmPassword :z.string(),
  })
export async function POST(req:Request){
    try {
        const body = await req.json();
        const {email,password,fullName,phone} =userSchema.parse(body);
        const userExist = await prisma.user.findUnique({
            where:{email:email,password:password,fullName:fullName,phone:phone}
        })
        if(userExist){
            return NextResponse.json({user:null , message:"user already there"},{status:409})
        }
        const newUser = await prisma.user.create({
            data:{email,password,fullName,phone}
        })
        return NextResponse.json({user:newUser,message:"user created"},{status:201});
    } catch (error) {
        return NextResponse.json({message:"There's a problem Some where"},{status:500});
    }
}