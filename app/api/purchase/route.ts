import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
try {
const {productId,userId}=await req.json();
const purchase=await prismadb.purchase.create({
data:{
productId,
userId
}
});

return NextResponse.json({message:"Successfully purchased",purchase},{status:200})


} catch (error) {
return NextResponse.json({error:error},{status:500});
}
}

export async function GET(){
   try {
    const purchase=await prismadb.purchase.findMany({
        include:{
            product:true,
            user:true,
        }
    })
return NextResponse.json({message:"Successfully fetched",purchase},{status:200})
    
   } catch (error) {
return NextResponse.json({error:error},{status:500});
    
   }

}
