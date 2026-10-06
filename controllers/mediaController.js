import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { prisma } from '../lib/prisma.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOADS_DIR = join(__dirname, '..', 'uploads');

if (!existsSync(UPLOADS_DIR)) {
  mkdirSync(UPLOADS_DIR, { recursive: true });
}

export const getMedia = async (req, res, next) => {
  try {
    const media = await prisma.media.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(media);
  } catch (err) {
    next(err);
  }
};

export const uploadMedia = async (req, res, next) => {
  try {
    const { name, base64Data, mimeType, altText, title } = req.body;
    if (!base64Data) {
      return res.status(400).json({ success: false, error: 'Image data is required' });
    }

    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(base64Data, 'base64');
    const actualMime = matches ? matches[1] : (mimeType || 'image/png');
    const ext = actualMime.split('/')[1] || 'png';
    const filename = `media_${Date.now()}_${Math.random().toString(36).substring(2, 6)}.${ext}`;
    const filePath = join(UPLOADS_DIR, filename);

    writeFileSync(filePath, buffer);

    const protocol = req.protocol;
    const host = req.get('host');
    const publicUrl = `${protocol}://${host}/uploads/${filename}`;

    const mediaRecord = await prisma.media.create({
      data: {
        name: name || filename,
        url: publicUrl,
        size: buffer.length,
        mimeType: actualMime,
        altText: altText || name || '',
        title: title || name || '',
      },
    });

    res.json({ success: true, media: mediaRecord });
  } catch (err) {
    next(err);
  }
};

export const updateMedia = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { altText, title } = req.body;
    const updated = await prisma.media.update({
      where: { id },
      data: { altText, title },
    });
    res.json({ success: true, media: updated });
  } catch (err) {
    next(err);
  }
};

export const deleteMedia = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.media.delete({ where: { id } });
    res.json({ success: true, message: 'Media deleted successfully' });
  } catch (err) {
    next(err);
  }
};
