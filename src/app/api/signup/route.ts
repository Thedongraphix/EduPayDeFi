import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Add some basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Here you would typically save to a database
    // For now, just simulate success
    console.log("New signup:", { email }); // Debug log

    return NextResponse.json(
      { 
        message: "Account created successfully",
        user: { email } 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Signup error:", error); // Debug log
    return NextResponse.json(
      { message: "Something went wrong during signup" },
      { status: 500 }
    );
  }
}