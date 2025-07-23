import { drizzle } from "drizzle-orm/postgres-js";
import mysql from "mysql2/promise";

import * as schema from "./schema";

const connection = await mysql.createConnection({
  host: process.env.AIVEN_DB_HOST,
  user: process.env.AIVEN_DB_USER,
  password: process.env.AIVEN_DB_PASSWORD,
  database: process.env.AIVEN_DB_NAME,
  port: Number(process.env.AIVEN_DB_PORT),
});

export const db = drizzle(connection, {
  casing: "snake_case",
  schema: schema,
  mode: "default",
});
