import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {email,password,name}=await req.json();
        const existingUser=await prismadb.user.findUnique({
            where:{
                email
            }
        });
        if(existingUser){
            return NextResponse.json({message:"User already exists"},{status:400});
        }

        const user=await prismadb.user.create({
            data:{
                email,name,password
            }
        });
        return NextResponse.json({message:"User created",user},{status:200});
        
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
    }
}