import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const counts = await db
      .collection("interests")
      .aggregate([
        { $group: { _id: "$userType", count: { $sum: 1 } } },
      ])
      .toArray();

    const result = { parent: 0, school: 0, driver: 0, total: 0 };
    for (const row of counts) {
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
