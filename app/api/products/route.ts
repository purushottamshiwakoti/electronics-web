import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const products=await prismadb.product.findMany(
    );
    return NextResponse.json({message:"yes",products});
}
