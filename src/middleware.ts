import NextAuth from "next-auth";
import { authConfig } from "@/config/auth";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets|about|sitemap.xml|robots.txt|manifest.json|$|\\/|[^/]+\\.[^/]+).*)", // Exclude files and folders in public
  ],
};
