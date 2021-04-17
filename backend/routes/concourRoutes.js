import express from 'express';
const router = express.Router();
import {
  getConcours,
  getConcourById,
  createConcour,
} from '../controllers/concourController.js';

router.route('/').post(createConcour).get(getConcours);
router.route('/:id').get(getConcourById);

export default router;
