import { Router } from 'express';
import {
  getInbox,
  updateInboxStatus,
  deleteInbox,
} from '../controllers/inboxController.js';

const router = Router();

router.get('/', getInbox);
router.patch('/:id', updateInboxStatus);
router.delete('/:id', deleteInbox);

export default router;
