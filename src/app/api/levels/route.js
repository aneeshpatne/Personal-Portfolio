import { NextResponse } from "next/server";
const redis = require('redis');
const client = redis.createClient({
    password: 'KErQmHhRDdDNdWnBtA0Dqf9JIhBYEoPp',
    socket: {
        host: 'redis-13874.c251.east-us-mz.azure.redns.redis-cloud.com',
        port: 13874
    }
});
(async () =>{
    try{
        client.connect();
    }
    catch(err){
        console.error('REDIS ERROR', err)
    }
})();
export async function GET() {
    try{
        const values = await client.mGet(['easy', 'medium', 'hard']);
        return NextResponse.json({
            val3:parseInt(values[0], 10) || 0,
            val2:parseInt(values[1], 10) || 0,
            val1:parseInt(values[2], 10) || 0,

        })
    }catch(err){
        console.error('Error Fetching', err);
        return NextResponse.json({error: 'Faild to fetch levels'}, {status:500})
    }
}
export async function POST(req) {
    try {
        const { level, value } = await req.json();

        if (!['easy', 'medium', 'hard'].includes(level)) {
            return NextResponse.json({ error: 'Invalid level' }, { status: 400 });
        }
        if (isNaN(value)) {
            return NextResponse.json({ error: 'Value must be a number' }, { status: 400 });
        }

        await client.set(level, value.toString());
        return NextResponse.json({ message: `Updated ${level} to ${value}` });
    } catch (err) {
        console.error('Error updating level:', err);
        return NextResponse.json({ error: 'Failed to update level' }, { status: 500 });
    }
}