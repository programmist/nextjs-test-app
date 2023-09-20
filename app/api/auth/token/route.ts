import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Just a fun test to see the jwt via the API
export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}
