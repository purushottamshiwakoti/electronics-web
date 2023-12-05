import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:any}){
    try {
        const id=params.id;
        const purchase=await prismadb.purchase.findMany({
           where:{
            userId:id
           },
           include:{
            product:true,
            user:true,
        }
        });
return NextResponse.json({message:"Successfully fetched",purchase},{status:200})
        
        
    } catch (error) {
return NextResponse.json({error:error},{status:500});
        
    }
}