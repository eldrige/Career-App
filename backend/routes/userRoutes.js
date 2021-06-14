import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  registerUser,
  authUser,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUserProfile,
  updateUser,
  getUserProfile,
} from '../controllers/userController.js';

router
  .route('/profile')
  // the protect is the middleware that protects the respective route
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/').post(registerUser).get(protect, admin, getAllUsers);
router.route('/login').post(authUser);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
