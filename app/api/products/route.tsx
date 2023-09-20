import { NextRequest, NextResponse } from "next/server";
import productService from "./products";
import productSchema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json(productService.getAll());
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = productSchema.safeParse(body);
  if (!valid.success) {
    return NextResponse.json({ error: valid.error.errors }, { status: 400 });
  }
  const newProduct = productService.create({
    id: productService.nextId(),
    name: body.name,
    price: body.price,
  });
  return NextResponse.json(newProduct);
}
