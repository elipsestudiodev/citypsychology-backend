import { Router } from 'express';
import {
  getMedia,
  uploadMedia,
  updateMedia,
  deleteMedia,
} from '../controllers/mediaController.js';

const router = Router();

router.get('/', getMedia);
router.post('/upload', uploadMedia);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

export default router;
