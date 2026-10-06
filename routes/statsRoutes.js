import { Router } from 'express';
import { getStats, healthCheck } from '../controllers/statsController.js';

const router = Router();

router.get('/stats', getStats);
router.get('/health', healthCheck);

export default router;
