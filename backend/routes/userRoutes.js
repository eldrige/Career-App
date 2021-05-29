import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { registerUser, authUser } from '../controllers/userController.js';

router.route('/').post(registerUser);
router.route('/login').post(authUser);

export default router;
