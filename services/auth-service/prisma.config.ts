import { defineConfig } from '@prisma/config';
import { config as loadEnv } from 'dotenv';
import path from 'path';

// 🧠 Ensure Prisma loads your local .env
loadEnv({ path: path.resolve(__dirname, './.env') });

export default defineConfig({
  schema: './prisma/schema.prisma',
});
