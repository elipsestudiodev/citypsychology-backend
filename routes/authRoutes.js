import { Router } from 'express';
import {
  login,
  getProfile,
  updateCredentials,
  updatePin,
} from '../controllers/authController.js';

const router = Router();

router.post('/login', login);
router.get('/profile', getProfile);
router.put('/credentials', updateCredentials);
router.put('/pin', updatePin);

export default router;
