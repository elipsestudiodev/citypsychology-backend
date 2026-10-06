import { prisma } from '../lib/prisma.js';

export const getSettings = async (req, res, next) => {
  try {
    const setting = await prisma.setting.findUnique({ where: { id: 'default' } });
    if (!setting) {
      return res.status(404).json({ success: false, error: 'Settings not found' });
    }
    res.json(setting);
  } catch (err) {
    next(err);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const { general, socials, footer, seo } = req.body;
    const current = (await prisma.setting.findUnique({ where: { id: 'default' } })) || {
      general: {},
      socials: {},
      footer: {},
      seo: {},
    };

    const updated = await prisma.setting.upsert({
      where: { id: 'default' },
      update: {
        general: general ? { ...(current.general || {}), ...general } : current.general,
        socials: socials ? { ...(current.socials || {}), ...socials } : current.socials,
        footer: footer ? { ...(current.footer || {}), ...footer } : current.footer,
        seo: seo ? { ...(current.seo || {}), ...seo } : current.seo,
      },
      create: {
        id: 'default',
        general: general || {},
        socials: socials || {},
        footer: footer || {},
        seo: seo || {},
      },
    });

    res.json({ success: true, settings: updated });
  } catch (err) {
    next(err);
  }
};
