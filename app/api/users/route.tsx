import { NextRequest, NextResponse } from "next/server";

// Note: According to Mosh, keeping the unused request param
// will stop Next from caching the data from this function
export function GET(request: NextRequest): NextResponse {
  return NextResponse.json([
    { id: 1, name: "Tony" },
    { id: 2, name: "Mosh" },
  ]);
}
