import { NextRequest, NextResponse } from "next/server";
import userService from "./users";

// Note: According to Mosh, keeping the unused request param
// will stop Next from caching the data from this function
export function GET(request: NextRequest) {
  return NextResponse.json(userService.getAll());
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate input data
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const users = userService.getAll();
  return NextResponse.json(
    { id: userService.nextId(), name: body.name },
    { status: 201 }
  );
}
