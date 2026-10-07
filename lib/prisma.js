import { PrismaClient } from '@prisma/client';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env');

if (existsSync(envPath)) {
  try {
    const envFile = readFileSync(envPath, 'utf-8');
    envFile.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const [key, ...rest] = trimmed.split('=');
      if (key && !process.env[key.trim()]) {
        process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
      }
    });
  } catch (e) {
    console.warn('Could not read .env in prisma.js:', e.message);
  }
}

const dbUrl = process.env.DATABASE_URL || 'mysql://root:@localhost:3306/city_psychology';

const createPrismaProxy = (client) => {
  return new Proxy(client, {
    get(target, prop, receiver) {
      if (prop in target) {
        return target[prop];
      }
      if (typeof prop === 'string') {
        const lowerProp = prop.toLowerCase();
        if (lowerProp in target) {
          return target[lowerProp];
        }
        // Aliases for common camelCase variations
        const aliasMap = {
          homepagesection: target.homepagesection,
          homepage_section: target.homepagesection,
          setting: target.setting,
          settings: target.setting,
          page: target.page,
          pages: target.page,
          inbox: target.inbox,
          inboxes: target.inbox,
          media: target.media,
          admin: target.admin,
        };
        if (aliasMap[lowerProp]) {
          return aliasMap[lowerProp];
        }
      }
      return target[prop];
    },
  });
};

let prisma;

if (process.env.NODE_ENV === 'production') {
  const rawPrisma = new PrismaClient({
    datasources: { db: { url: dbUrl } },
  });
  prisma = createPrismaProxy(rawPrisma);
} else {
  if (!global.__db) {
    global.__db = new PrismaClient({
      datasources: { db: { url: dbUrl } },
      log: ['error', 'warn'],
    });
  }
  prisma = createPrismaProxy(global.__db);
}

export { prisma };
