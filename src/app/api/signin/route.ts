import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Here you would typically:
    // 1. Check if user exists in database
    // 2. Verify password
    // 3. Create a session

    // For now, let's just do a simple check
    if (email === "test@example.com" && password === "password123") {
      return NextResponse.json({ message: "Signed in successfully" });
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}