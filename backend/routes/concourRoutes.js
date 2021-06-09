import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getConcours,
  getConcourById,
  createConcour,
  updateConcour,
} from '../controllers/concourController.js';

router.route('/').post(createConcour).get(getConcours);
router.route('/:id').get(getConcourById).put(protect, admin, updateConcour);

export default router;
