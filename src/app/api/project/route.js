import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";
export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db('Projects');
        const data = await db.collection('projectMainPage').find({}).toArray();
        return NextResponse.json(data, { status: 200 });
       }
         catch(err){
              return NextResponse.json({ message: err.message }, { status: 500 });
         }
}