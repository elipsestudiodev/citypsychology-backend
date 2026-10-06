import { prisma } from '../lib/prisma.js';

export const healthCheck = async (_req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      database: 'connected (MySQL)',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ status: 'error', database: err.message });
  }
};

export const getStats = async (_req, res, next) => {
  try {
    const totalPages = await prisma.page.count();
    const activePages = await prisma.page.count({ where: { status: 'active' } });
    const totalInquiries = await prisma.inbox.count();
    const newInquiries = await prisma.inbox.count({ where: { status: 'new' } });
    const totalMedia = await prisma.media.count();

    res.json({
      totalPages,
      activePages,
      totalInquiries,
      newInquiries,
      totalMedia,
      serverTime: new Date().toISOString(),
      status: 'healthy',
    });
  } catch (err) {
    next(err);
  }
};
