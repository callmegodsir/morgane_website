import React from "react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authenticated = req.cookies.get("authenticated")?.value;
  const hash = req.cookies.get("hash")?.value;
  const url = req.nextUrl.clone();

  if (!authenticated || !hash || !req.nextUrl.pathname.includes(hash)) {
    url.pathname = "/connexion";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*", // Protege toutes les sous-routes du tableau de bord
};
