import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {email,password}=await req.json();
        const findUser=await prismadb.user.findUnique({
            where:{
                email
            }
        });
        if(!findUser){
            return NextResponse.json({message:"Invalid Crediantials"},{status:400});
        }

        if(password===findUser.password){
            return NextResponse.json({message:"Logged in successfully",findUser},{status:200});

        }
        
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
    }
}