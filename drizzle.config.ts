import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_lmOzMAsy67Eg@ep-purple-bonus-a86tqu9t-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
} satisfies Config;
