import { NextResponse } from "next/server";
const redis = require('redis');

let client;

if (!global._redisClient) {
    global._redisClient = redis.createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        },
    });

    global._redisClient.on('error', (err) => {
        console.error('Redis Client Error', err);
    });

    (async () => {
        try {
            await global._redisClient.connect();
            console.log('Connected to Redis');
        } catch (err) {
            console.error('REDIS ERROR:', err);
        }
    })();
}

client = global._redisClient;

export async function GET() {
    try {
        const values = await client.mGet(['easy', 'medium', 'hard']);
        return NextResponse.json({
            val3: parseInt(values[0], 10) || 0,
            val2: parseInt(values[1], 10) || 0,
            val1: parseInt(values[2], 10) || 0,
        });
    } catch (err) {
        console.error('Error Fetching', err);
        return NextResponse.json({ error: 'Failed to fetch levels' }, { status: 500 });
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