import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
   // if (request.nextUrl.pathname === '/about') {
   //    return NextResponse.redirect(new URL("/", request.url));
   // }
   // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//    matcher: "/about",
// };