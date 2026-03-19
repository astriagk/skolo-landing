import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const count = await db.collection("clicks").countDocuments({});
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { anonymousId } = body;

    if (!anonymousId || typeof anonymousId !== "string") {
      return NextResponse.json({ error: "Missing anonymousId" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const existing = await db.collection("clicks").findOne({ anonymousId });
    if (existing) {
      return NextResponse.json({ success: true, alreadyCounted: true });
    }

    await db.collection("clicks").insertOne({ anonymousId, timestamp: new Date() });
    return NextResponse.json({ success: true, alreadyCounted: false }, { status: 201 });
  } catch (error) {
    console.error("Click submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
