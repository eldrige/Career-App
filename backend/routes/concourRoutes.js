import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getConcours,
  getConcourById,
  createConcour,
} from '../controllers/concourController.js';

router.route('/').post(protect, admin, createConcour).get(getConcours);
router.route('/:id').get(getConcourById);

export default router;
