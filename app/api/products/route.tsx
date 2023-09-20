import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = productSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct);
}
