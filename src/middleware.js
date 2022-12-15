import { NextResponse } from "next/server";
import validate from "./validators/validate";

export async function middleware(req) {
  if (req.method == "POST") {
    await validate(req);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
