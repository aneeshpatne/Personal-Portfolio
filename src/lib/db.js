import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://localhost:5432/default",
  max: 1,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
});

export const db = drizzle(pool, { schema: {} });
