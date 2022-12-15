import { NextResponse } from "next/server";
import validate from "./validators/validate";

export async function middleware(req) {
  if (req.method == "POST") {
    // Frågan är bara vad man ska göra här om man får valideringsfel?
    // Man kan i princip bara göra redirect till en sida under /pages om jag förstår rätt.
    // Man kan inte skriva till response.body numera, såvitt jag förstår.
    await validate(req);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
