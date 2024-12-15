import { NextResponse } from "next/server";
import db from "@/lib/db";

// Get all donations
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM donations");
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Create a new donation
export async function POST(request) {
  try {
    const data = await request.json();
    const { amount, donor_name, email } = data;

    const [result] = await db.query(
      "INSERT INTO donations (amount, donor_name, email) VALUES (?, ?, ?)",
      [amount, donor_name, email]
    );

    return NextResponse.json({
      id: result.insertId,
      message: "Donation created successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
