import { NextRequest, NextResponse } from "next/server";
import userService from "../users";

interface UrlParams {
  params: { id: string };
}

export function GET(
  request: NextRequest,
  { params: { id } }: UrlParams
): NextResponse {
  const user = userService.getUser(parseInt(id));
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(user);
  }
}

export async function PUT(request: NextRequest, { params: { id } }: UrlParams) {
  let body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  } else if (!userService.hasUser(parseInt(id))) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  body = userService.updateUser(body, parseInt(id));
  return NextResponse.json(body);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: UrlParams
) {
  if (!userService.hasUser(parseInt(id))) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  userService.deleteUser(parseInt(id));
  return NextResponse.json({});
}
