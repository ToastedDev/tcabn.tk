import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import redirects from "redirects.json";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const path = nextUrl.pathname.split("/").pop();
  const r = redirects.find(({ id }) => id === path);
  if (r) return NextResponse.redirect(r.redirect);
}

export const config = {
  matcher: "/:redirect*",
};
