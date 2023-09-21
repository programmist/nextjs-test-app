import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  oldPassword: z.string(),
  newPassword: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const valid = schema.safeParse(body);

  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: body.email } });

  if (user) {
    const match = await bcrypt.compare(body.oldPassword, user.hashedPassword!);

    if (match) {
      const hashedPassword = await bcrypt.hash(body.newPassword, 10);
      await prisma.user.update({
        where: { email: body.email },
        data: { hashedPassword },
      });
      return NextResponse.json({});
    } else {
      return NextResponse.json(
        { error: "Old password is incorrect" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
