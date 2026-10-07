import { prisma } from '../lib/prisma.js';

const parseField = (val) => {
  if (!val) return {};
  if (typeof val === 'object') return val;
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch {
      return {};
    }
  }
  return {};
};

const stringifyField = (val) => {
  if (typeof val === 'string') return val;
  try {
    return JSON.stringify(val || {});
  } catch {
    return '{}';
  }
};

export const getSettings = async (req, res, next) => {
  try {
    let setting = await prisma.setting.findUnique({ where: { id: 'default' } });
    if (!setting) {
      setting = await prisma.setting.create({
        data: {
          id: 'default',
          general: '{}',
          socials: '{}',
          footer: '{}',
          seo: '{}',
          updatedAt: new Date(),
        },
      });
    }

    res.json({
      id: setting.id,
      general: parseField(setting.general),
      socials: parseField(setting.socials),
      footer: parseField(setting.footer),
      seo: parseField(setting.seo),
      updatedAt: setting.updatedAt,
    });
  } catch (err) {
    next(err);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const { general, socials, footer, seo } = req.body || {};
    const current = (await prisma.setting.findUnique({ where: { id: 'default' } })) || {
      general: '{}',
      socials: '{}',
      footer: '{}',
      seo: '{}',
    };

    const currentGeneral = parseField(current.general);
    const currentSocials = parseField(current.socials);
    const currentFooter = parseField(current.footer);
    const currentSeo = parseField(current.seo);

    const inputGeneral = general !== undefined ? parseField(general) : null;
    const inputSocials = socials !== undefined ? parseField(socials) : null;
    const inputFooter = footer !== undefined ? parseField(footer) : null;
    const inputSeo = seo !== undefined ? parseField(seo) : null;

    const mergedGeneral = inputGeneral ? { ...currentGeneral, ...inputGeneral } : currentGeneral;
    const mergedSocials = inputSocials ? { ...currentSocials, ...inputSocials } : currentSocials;
    const mergedFooter = inputFooter ? { ...currentFooter, ...inputFooter } : currentFooter;
    const mergedSeo = inputSeo ? { ...currentSeo, ...inputSeo } : currentSeo;

    const updated = await prisma.setting.upsert({
      where: { id: 'default' },
      update: {
        general: stringifyField(mergedGeneral),
        socials: stringifyField(mergedSocials),
        footer: stringifyField(mergedFooter),
        seo: stringifyField(mergedSeo),
        updatedAt: new Date(),
      },
      create: {
        id: 'default',
        general: stringifyField(mergedGeneral),
        socials: stringifyField(mergedSocials),
        footer: stringifyField(mergedFooter),
        seo: stringifyField(mergedSeo),
        updatedAt: new Date(),
      },
    });

    res.json({
      success: true,
      settings: {
        id: updated.id,
        general: mergedGeneral,
        socials: mergedSocials,
        footer: mergedFooter,
        seo: mergedSeo,
        updatedAt: updated.updatedAt,
      },
    });
  } catch (err) {
    next(err);
  }
};
