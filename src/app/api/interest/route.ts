import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phone = searchParams.get("phone");
  const userType = searchParams.get("userType");

  // No phone param → return counts breakdown
  if (!phone) {
    try {
      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      const rows = await db
        .collection("interests")
        .aggregate([{ $group: { _id: "$userType", count: { $sum: 1 } } }])
        .toArray();
      const result = { parent: 0, school: 0, driver: 0, total: 0 };
      for (const row of rows) {
        if (row._id === "parent") result.parent = row.count;
        else if (row._id === "school") result.school = row.count;
        else if (row._id === "driver") result.driver = row.count;
        result.total += row.count;
      }
      return NextResponse.json(result);
    } catch {
      return NextResponse.json({ parent: 0, school: 0, driver: 0, total: 0 });
    }
  }

  if (!userType || phone.length !== 10) {
    return NextResponse.json({ exists: false });
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const existing = await db.collection("interests").findOne({ phone, userType });

    if (existing) {
      const typeLabel = userType === "school" ? "school" : userType === "driver" ? "driver" : "parent";
      return NextResponse.json({
        exists: true,
        message: `This number is already registered as a ${typeLabel}. We'll be in touch soon!`,
      });
    }
    return NextResponse.json({ exists: false });
  } catch {
    return NextResponse.json({ exists: false });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.userType || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const existing = await db.collection("interests").findOne({
      phone: body.phone,
      userType: body.userType,
    });

    if (existing) {
      const typeLabel = body.userType === "parent" ? "parent" : body.userType === "school" ? "school" : "driver";
      return NextResponse.json(
        { error: "already_registered", message: `This phone number is already registered as a ${typeLabel}. We'll be in touch soon!` },
        { status: 409 }
      );
    }

    const result = await db.collection("interests").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Interest submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
