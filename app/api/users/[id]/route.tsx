import { NextRequest, NextResponse } from "next/server";
import userService from "../users";

interface UrlParams {
  params: { id: string };
}

export function GET(
  request: NextRequest,
  { params: { id } }: UrlParams
): NextResponse {
  const user = userService.getUser(id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(user);
  }
}
