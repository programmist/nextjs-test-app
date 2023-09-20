import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

// Note: According to Mosh, keeping the unused request param
// will stop Next from caching the data from this function
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate input data
  const valid = userSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user) {
    return NextResponse.json(
      { error: "A user with this email already exists" },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
