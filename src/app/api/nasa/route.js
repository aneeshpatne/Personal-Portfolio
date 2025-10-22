import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`,
      { next: { revalidate: 60 * 60 * 24 } } // Cache for 24 hours
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch NASA APOD" },
        { status: res.status }
      );
    }

    const data = await res.json();
    
    // Only return what we need
    return NextResponse.json({
      title: data.title,
      date: data.date,
      url: data.url,
      media_type: data.media_type,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
