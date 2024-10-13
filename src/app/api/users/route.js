
import connectToDatabase from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(){
   await connectToDatabase();
   try {
    return NextResponse.json({message:'Connection is Ready...'})    
   } catch (error) {
    return NextResponse.json({error:error.message})
   }
}

