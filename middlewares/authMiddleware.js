import { prisma } from '../lib/prisma.js';

/**
 * Middleware to verify Admin PIN / Token
 * Used for protected dashboard modification routes if strict auth is enforced
 */
export const requireAdmin = async (req, res, next) => {
  try {
    const pin = req.headers['x-admin-pin'] || req.body?.pin;
    const authHeader = req.headers.authorization;

    // If client passes token in format 'Bearer admin_token_...'
    if (authHeader && authHeader.startsWith('Bearer admin_token_')) {
      return next();
    }

    // If client passes X-Admin-Pin header
    if (pin) {
      const admin = await prisma.admin.findUnique({ where: { id: 'admin' } });
      if (admin && String(admin.pin) === String(pin)) {
        return next();
      }
    }

    return res.status(401).json({
      success: false,
      error: 'Unauthorized: Valid Admin PIN or Token required',
    });
  } catch (err) {
    next(err);
  }
};
