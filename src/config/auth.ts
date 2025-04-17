import type { NextAuthConfig } from "next-auth";

import { createClient } from "@/lib/supabase/server";

export const authConfig = {
  pages: {
    signIn: "/admin/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnLoginPage = nextUrl.pathname === "/admin/signin";

      if (isOnLoginPage && !isLoggedIn)
        return Response.redirect(new URL("/admin", nextUrl));
      if (isOnAdmin && isLoggedIn) return true;
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.lastUpdated = new Date().toISOString();
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      return {
        ...session,
        user: {
          id: token.userId as string,
          email: token.email as string,
        },
      };
    },
  },
  events: {
    async signIn({ user }) {
      console.log("[AUTH] Successful sign-in:", {
        userId: user.id,
        email: user.email,
        timestamp: new Date().toISOString(),
      });
    },
    async signOut(message) {
      if ("session" in message) {
        if (message.session?.userId) {
          console.log("[AUTH] Signing out...");
          const supabase = await createClient();
          await supabase.auth.signOut();
        }
      }
    },
  },
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
