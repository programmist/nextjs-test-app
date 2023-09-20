import { NextRequest, NextResponse } from "next/server";
import userService from "../users";
import userSchema from "../schema";
import prisma from "@/prisma/client";

interface UrlParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: UrlParams) {
  const userId = parseInt(id);

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(user);
  }
}

export async function PUT(request: NextRequest, { params: { id } }: UrlParams) {
  let body = await request.json();
  const userId = parseInt(id);
  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  } else if (!userService.hasUser(userId)) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const updatedUser = userService.updateUser(body, userId);
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: UrlParams
) {
  const userId = parseInt(id);
  if (!userService.hasUser(userId)) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  userService.deleteUser(userId);
  return NextResponse.json({});
}
