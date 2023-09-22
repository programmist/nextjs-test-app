import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import selectFields from "../userPublicFields";

interface UrlParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: UrlParams) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: selectFields,
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(user);
  }
}

export async function PUT(request: NextRequest, { params: { id } }: UrlParams) {
  let body = await request.json();

  const valid = userSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (body.email) {
    const duplicateEmailUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (duplicateEmailUser) {
      return NextResponse.json(
        { error: "A user with this email already exists" },
        { status: 400 }
      );
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { name: body.name, email: body.email },
    select: selectFields,
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: UrlParams
) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({});
}
