import { NextRequest, NextResponse } from "next/server";
import userService from "./users";
import userSchema from "./schema";

// Note: According to Mosh, keeping the unused request param
// will stop Next from caching the data from this function
export function GET(request: NextRequest) {
  return NextResponse.json(userService.getAll());
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate input data
  const valid = userSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }

  const newUser = userService.createUser({
    id: userService.nextId(),
    name: body.name,
  });
  return NextResponse.json(newUser, { status: 201 });
}
