import { prisma } from '../lib/prisma.js';

export const getInbox = async (req, res, next) => {
  try {
    const inbox = await prisma.inbox.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(inbox);
  } catch (err) {
    next(err);
  }
};

export const updateInboxStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await prisma.inbox.update({
      where: { id },
      data: { status: status || 'read' },
    });
    res.json({ success: true, inquiry: updated });
  } catch (err) {
    next(err);
  }
};

export const deleteInbox = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.inbox.delete({ where: { id } });
    res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (err) {
    next(err);
  }
};
