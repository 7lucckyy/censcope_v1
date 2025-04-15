import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

import { authConfig } from "@/config/auth";
import { createClient } from "./supabase/server";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await authHandlers.handleSignIn(email, password);
          if (!user) return null;
          return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});

export const authHandlers = {
  async handleSignup(email: string, password: string) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `localhost:3000/auth/callback`,
      },
    });

    if (error) {
      console.error("[AUTH] Signup error:", error);
      throw new Error(error.message);
    }

    if (!data.user?.id) {
      throw new Error(
        "Signup successful. Please check your email for confirmation."
      );
    }

    return data.user;
  },

  async handleSignIn(email: string, password: string) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("[AUTH] Signin error:", error);
      throw new Error(error.message);
    }

    if (!data.user?.id) {
      throw new Error("Invalid credentials");
    }

    return data.user;
  },

  async handleResetPassword(email: string) {
    console.log(email);
    // We'll implement this in Part 3
  },
};
