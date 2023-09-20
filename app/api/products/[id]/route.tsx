import { NextRequest, NextResponse } from "next/server";
import productService from "../products";
import productSchema from "../schema";

interface Props {
  params: { id: string };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  const product = productService.get(parseInt(id));
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
  } else if (!productService.hasProduct(pId)) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  const updatedProduct = productService.update(body, pId);
  return NextResponse.json(updatedProduct);
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  const pId = parseInt(id);
  if (!productService.hasProduct(pId)) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  productService.delete(pId);
  return NextResponse.json({});
}
