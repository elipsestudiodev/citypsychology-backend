import { prisma } from '../lib/prisma.js';

export const getHomepage = async (req, res, next) => {
  try {
    const sections = await prisma.homePageSection.findMany();
    const result = {};
    for (const s of sections) {
      result[s.id] = {
        enabled: s.enabled,
        ...(s.data || {}),
      };
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const updateHomepage = async (req, res, next) => {
  try {
    const updates = req.body;
    for (const [sectionId, sectionData] of Object.entries(updates)) {
      const { enabled, ...data } = sectionData || {};
      await prisma.homePageSection.upsert({
        where: { id: sectionId },
        update: {
          enabled: enabled !== undefined ? enabled : true,
          data: data,
        },
        create: {
          id: sectionId,
          enabled: enabled !== undefined ? enabled : true,
          data: data,
        },
      });
    }

    const sections = await prisma.homePageSection.findMany();
    const result = {};
    for (const s of sections) {
      result[s.id] = {
        enabled: s.enabled,
        ...(s.data || {}),
      };
    }
    res.json({ success: true, homepage: result });
  } catch (err) {
    next(err);
  }
};
