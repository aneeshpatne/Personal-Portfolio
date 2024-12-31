import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";
export async function GET(req,  context) {
  const { collection } = await context.params;
    try{
        const client = await clientPromise;
        const db = client.db('Projects');
        const data = await db.collection(collection).find({}).toArray();
        return NextResponse.json(data, { status: 200 });
       }
         catch(error){
              return NextResponse.json({ message: error.message }, { status: 500 });
         }
}