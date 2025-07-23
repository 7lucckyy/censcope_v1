// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    AIVEN_DB_HOST: z.string(),
    AIVEN_DB_NAME: z.string(),
    AIVEN_DB_PORT: z.string(),
    AIVEN_DB_USER: z.string(),
    AIVEN_DB_PASSWORD: z.string(),
    AIVEN_DB: z.string(),
    CLOUDINARY_UPLOAD_PRESET: z.string(),
    CLOUDINARY_SECRET: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_NAME: z.string(),
    CLOUDINARY_URL: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {},
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    AIVEN_DB: process.env.AIVEN_DB_URI,
    AIVEN_DB_HOST: process.env.AIVEN_DB_HOST,
    AIVEN_DB_PORT: process.env.AIVEN_DB_PORT,
    AIVEN_DB_USER: process.env.AIVEN_DB_USER,
    AIVEN_DB_NAME: process.env.AIVEN_DB_NAME,
    AIVEN_DB_PASSWORD: process.env.AIVEN_DB_PASSWORD,
    CLOUDINARY_UPLOAD_PRESET: process.env.UPLOAD_PRESET,
    CLOUDINARY_API_KEY: process.env.API_KEY,
    CLOUDINARY_NAME: process.env.CLOUD_NAME,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUDINARY_SECRET: process.env.CLOUD_SECRET,
  },
});
