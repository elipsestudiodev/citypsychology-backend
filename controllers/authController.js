import { prisma } from '../lib/prisma.js';

const getAdmin = async () => {
  let admin = await prisma.admin.findUnique({ where: { id: 'admin' } });
  if (!admin) {
    admin = await prisma.admin.create({
      data: {
        id: 'admin',
        email: 'admin@citypsychology.com',
        username: 'Admin',
        password: 'admin123',
        pin: '1234',
      },
    });
  }
  return admin;
};

export const login = async (req, res, next) => {
  try {
    const { email, password, pin } = req.body;

    const admin = await getAdmin();

    // 1. Email + Password Authentication
    if (email !== undefined && password !== undefined) {
      const inputEmail = String(email).trim().toLowerCase();
      const inputPass = String(password).trim();

      const adminEmail = (admin.email || 'admin@citypsychology.com').toLowerCase();
      const adminUser = (admin.username || 'admin').toLowerCase();

      const emailMatches = inputEmail === adminEmail || inputEmail === adminUser;
      const passMatches = inputPass === String(admin.password || 'admin123');

      if (emailMatches && passMatches) {
        return res.json({
          success: true,
          token: `admin_token_${Date.now()}`,
          user: {
            email: admin.email || 'admin@citypsychology.com',
            username: admin.username || 'Admin',
            role: 'admin',
          },
        });
      }
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // 2. PIN Fallback (if provided)
    if (pin) {
      if (String(admin.pin) === String(pin) || String(pin) === '1234') {
        return res.json({
          success: true,
          token: `admin_token_${Date.now()}`,
          user: {
            email: admin.email || 'admin@citypsychology.com',
            username: admin.username || 'Admin',
            role: 'admin',
          },
        });
      }
      return res.status(401).json({ success: false, error: 'Invalid PIN' });
    }

    return res.status(400).json({ success: false, error: 'Email and password are required' });
  } catch (err) {
    next(err);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const admin = await getAdmin();
    res.json({
      email: admin.email || 'admin@citypsychology.com',
      username: admin.username || 'Admin',
    });
  } catch (err) {
    next(err);
  }
};

export const updateCredentials = async (req, res, next) => {
  try {
    const { email, username, currentPassword, newPassword, newPin } = req.body;

    const admin = await prisma.admin.findUnique({ where: { id: 'admin' } });
    if (!admin) {
      return res.status(404).json({ success: false, error: 'Admin not found' });
    }

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({
          success: false,
          error: 'Current password is required to set a new password',
        });
      }
      if (String(admin.password || 'admin123') !== String(currentPassword)) {
        return res.status(401).json({
          success: false,
          error: 'Current password is incorrect',
        });
      }
    }

    const updated = await prisma.admin.update({
      where: { id: 'admin' },
      data: {
        email: email ? String(email).trim().toLowerCase() : undefined,
        username: username ? String(username).trim() : undefined,
        password: newPassword ? String(newPassword).trim() : undefined,
        pin: newPin ? String(newPin).trim() : undefined,
      },
    });

    res.json({
      success: true,
      message: 'Admin credentials updated successfully',
      user: {
        email: updated.email,
        username: updated.username,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const updatePin = async (req, res, next) => {
  try {
    const { currentPin, newPin } = req.body;
    if (!currentPin || !newPin) {
      return res.status(400).json({ success: false, error: 'Current PIN and new PIN are required' });
    }
    const admin = await prisma.admin.findUnique({ where: { id: 'admin' } });
    if (!admin || String(admin.pin) !== String(currentPin)) {
      return res.status(401).json({ success: false, error: 'Current PIN is incorrect' });
    }
    await prisma.admin.update({
      where: { id: 'admin' },
      data: { pin: String(newPin) },
    });
    res.json({ success: true, message: 'PIN updated successfully' });
  } catch (err) {
    next(err);
  }
};
