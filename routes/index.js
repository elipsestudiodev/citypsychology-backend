import { Router } from 'express';
import authRoutes from './authRoutes.js';
import settingsRoutes from './settingsRoutes.js';
import homepageRoutes from './homepageRoutes.js';
import pagesRoutes from './pagesRoutes.js';
import mediaRoutes from './mediaRoutes.js';
import inboxRoutes from './inboxRoutes.js';
import emailRoutes from './emailRoutes.js';
import statsRoutes from './statsRoutes.js';

const router = Router();

// Mount modular sub-routers under /api
router.use('/auth', authRoutes);
router.use('/settings', settingsRoutes);
router.use('/homepage', homepageRoutes);
router.use('/pages', pagesRoutes);
router.use('/media', mediaRoutes);
router.use('/inbox', inboxRoutes);
router.use('/', emailRoutes);
router.use('/', statsRoutes);

export default router;
