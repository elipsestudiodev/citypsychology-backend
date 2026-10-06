import express from 'express';
import cors from 'cors';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import apiRoutes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import { requestLogger } from './middlewares/loggerMiddleware.js';

// ── Environment Variables Loader ──────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '.env');
try {
  const envFile = readFileSync(envPath, 'utf-8');
  envFile.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...rest] = trimmed.split('=');
    if (key) process.env[key.trim()] = rest.join('=').trim();
  });
} catch {
  console.warn('⚠️  .env file not found — using system environment variables.');
}

const app = express();
const PORT = process.env.PORT || process.env.SERVER_PORT || 3001;
const UPLOADS_DIR = join(__dirname, 'uploads');

// Ensure uploads directory exists
if (!existsSync(UPLOADS_DIR)) {
  mkdirSync(UPLOADS_DIR, { recursive: true });
}

// ── Core Middlewares ──────────────────────────────────────────────────────
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Pin'],
  })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(requestLogger);

// Static uploads folder
app.use('/uploads', express.static(UPLOADS_DIR));

// ── REST API Routes ───────────────────────────────────────────────────────
app.use('/api', apiRoutes);

// ── Error Handling Middlewares ────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

// ── Server Start ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('───────────────────────────────────────────────');
  console.log(`🚀 City Psychology API running on http://localhost:${PORT}`);
  console.log(`📁 Uploads served from http://localhost:${PORT}/uploads`);
  console.log(`⚡ MySQL + Prisma ORM initialized & active`);
  console.log('───────────────────────────────────────────────');
});
