import { NextRequest, NextResponse } from "next/server";

const users: { [key: string | number]: { [key: string]: string | number } } = {
  1: { id: 1, name: "Tony" },
  2: { id: 2, name: "Mosh" },
  3: { id: 3, name: "John" },
  4: { id: 4, name: "Bill" },
};

const dao = {
  getUser(id: string) {
    return users[id];
  },
};

interface UrlParams {
  params: { id: string };
}

export function GET(
  request: NextRequest,
  { params: { id } }: UrlParams
): NextResponse {
  const user = dao.getUser(id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(dao.getUser(id));
  }
}
