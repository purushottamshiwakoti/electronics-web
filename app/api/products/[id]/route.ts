import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:any}){
    const id=params.id;
    const product=await prismadb.product.findUnique({
        where:{
            id,
        }
    })
    return NextResponse.json({message:"yes",product});
    

}

