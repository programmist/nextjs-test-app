import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  } else {
    return NextResponse.json(product);
  }
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const pId = parseInt(id);

  const valid = productSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }

  const existingProduct = await prisma.product.findUnique({
    where: { id: pId },
  });
  if (!existingProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: pId },
    data: { name: body.name, price: parseFloat(body.price) },
  });
  return NextResponse.json(updatedProduct);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const pId = parseInt(id);

  const product = await prisma.product.findUnique({
    where: { id: pId },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  await prisma.product.delete({ where: { id: pId } });
  return NextResponse.json({});
}
