import { prisma } from '../lib/prisma.js';

const parseDataField = (val) => {
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

const stringifyDataField = (val) => {
  if (typeof val === 'string') return val;
  try {
    return JSON.stringify(val || {});
  } catch {
    return '{}';
  }
};

export const getHomepage = async (req, res, next) => {
  try {
    const sections = await prisma.homepagesection.findMany();
    const result = {};
    for (const s of sections) {
      const parsed = parseDataField(s.data);
      result[s.id] = {
        enabled: s.enabled !== undefined ? Boolean(s.enabled) : true,
        ...parsed,
      };
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const updateHomepage = async (req, res, next) => {
  try {
    const updates = req.body || {};
    for (const [sectionId, sectionData] of Object.entries(updates)) {
      if (!sectionData || typeof sectionData !== 'object') continue;
      const { enabled, ...data } = sectionData;
      const isEnabled = enabled !== undefined ? Boolean(enabled) : true;
      const dataString = stringifyDataField(data);

      await prisma.homepagesection.upsert({
        where: { id: sectionId },
        update: {
          enabled: isEnabled,
          data: dataString,
          updatedAt: new Date(),
        },
        create: {
          id: sectionId,
          enabled: isEnabled,
          data: dataString,
          updatedAt: new Date(),
        },
      });
    }

    const sections = await prisma.homepagesection.findMany();
    const result = {};
    for (const s of sections) {
      const parsed = parseDataField(s.data);
      result[s.id] = {
        enabled: s.enabled !== undefined ? Boolean(s.enabled) : true,
        ...parsed,
      };
    }
    res.json({ success: true, homepage: result });
  } catch (err) {
    next(err);
  }
};
